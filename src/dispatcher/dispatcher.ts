import { Subject } from 'rxjs';

import type { ActionDispatcher, ActionEventMapBase, ActionUnion } from '../types/types';
import { ofType } from '../utils/ofType';

/**
 * Creates a new typed ActionDispatcher
 * @returns {ActionDispatcher<EventMap>}
 */
export function createActionDispatcher<EventMap extends ActionEventMapBase>(): ActionDispatcher<EventMap> {
    const source = new Subject<ActionUnion<EventMap>>();
    const source$ = source.asObservable();

    return {
        source: source$,
        dispatch: (event) => source.next(event),
        observe: (type) => source$.pipe(ofType(type))
    };
}
