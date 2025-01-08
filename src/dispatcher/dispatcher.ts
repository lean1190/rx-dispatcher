import { ReplaySubject } from 'rxjs';

import type { ActionDispatcher, ActionEventMapBase, ActionUnion } from '../types/types';
import { ofType } from '../utils/ofType';

/**
 * Creates a new typed ActionDispatcher
 * @returns {ActionDispatcher<EventMap>}
 */
export function createActionDispatcher<EventMap extends ActionEventMapBase>(): ActionDispatcher<EventMap> {
    const source = new ReplaySubject<ActionUnion<EventMap>>();

    return {
        source: source.asObservable(),
        dispatch: (event) => source.next(event),
        observe: (type) => source.pipe(ofType(type))
    };
}
