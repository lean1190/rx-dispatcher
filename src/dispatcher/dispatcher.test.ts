import { tap } from 'rxjs';
import { describe, expect, it, vitest } from 'vitest';

import { takeValues } from '../utils/takeValues';
import { createActionDispatcher } from './dispatcher';

declare const global: {
    console: { debug: () => void };
};

describe('dispatcher', () => {
    type ActionEventsMap = {
        one: boolean,
        two: string
    };

    const setup = () => {
        vitest.clearAllMocks();
        const dispatcher = createActionDispatcher<ActionEventsMap>();

        return {
            dispatcher,
            consoleDebugSpy: vitest.spyOn(global.console, 'debug').mockImplementation(() => undefined)
        };
    };

    it('should only emit a certain event', async () => {
        const { consoleDebugSpy, dispatcher } = setup();
        const obs = dispatcher.observe('one').pipe(tap(console.debug));

        const subscription = takeValues(obs);
        dispatcher.dispatch({ type: 'one' });
        dispatcher.dispatch({ type: 'two' });

        const [emission] = await subscription;

        expect(emission).toStrictEqual({ type: 'one' });
        expect(consoleDebugSpy).toHaveBeenCalledOnce();
    });

    it('should emit all events', async () => {
        const { consoleDebugSpy, dispatcher } = setup();
        const obs = dispatcher.source.pipe(tap(console.debug));

        const subscription = takeValues(obs, 2);

        dispatcher.dispatch({ type: 'one' });
        dispatcher.dispatch({ type: 'two' });

        const [emission1, emission2] = await subscription;

        expect(emission1).toStrictEqual({ type: 'one' });
        expect(emission2).toStrictEqual({ type: 'two' });

        expect(consoleDebugSpy).toHaveBeenCalledTimes(2);
    });
});
