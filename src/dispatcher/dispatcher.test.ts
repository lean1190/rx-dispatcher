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

        return {
            consoleDebugSpy: vitest.spyOn(global.console, 'debug').mockImplementation(() => ({}))
        };
    };

    it('should only emit a certain event', () => {
        const { consoleDebugSpy } = setup();
        const dispatcher = createActionDispatcher<ActionEventsMap>();
        const obs = dispatcher.observe('one').pipe(tap(console.debug));

        dispatcher.dispatch({ type: 'one' });
        dispatcher.dispatch({ type: 'two' });

        obs.subscribe((emission) => {
            expect(emission).toStrictEqual({ type: 'one' });
            expect(consoleDebugSpy).toHaveBeenCalledOnce();
        });
    });

    it('should emit all events', async () => {
        const { consoleDebugSpy } = setup();
        const dispatcher = createActionDispatcher<ActionEventsMap>();
        const obs = dispatcher.source.pipe(tap(console.debug));

        dispatcher.dispatch({ type: 'one' });
        dispatcher.dispatch({ type: 'two' });

        const [emission1, emission2] = await takeValues(obs, 2);

        expect(emission1).toStrictEqual({ type: 'one' });
        expect(emission2).toStrictEqual({ type: 'two' });

        expect(consoleDebugSpy).toHaveBeenCalledTimes(2);
    });
});
