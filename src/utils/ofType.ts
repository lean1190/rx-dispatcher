import { filter, type OperatorFunction } from 'rxjs';

import type { ActionEventMapBase, ActionUnion } from '../types/types';

/**
 * Returns a filter operator that acts as a guard for a specific event type
 * @param {T extends keyof EventMap} type
 * @returns {OperatorFunction<ActionUnion<EventMap>, Extract<ActionUnion<EventMap>, { type: T }>>}
 */
export function ofType<EventMap extends ActionEventMapBase, T extends keyof EventMap>(
    type: T
): OperatorFunction<ActionUnion<EventMap>, Extract<ActionUnion<EventMap>, { type: T }>> {
    return filter((event): event is Extract<ActionUnion<EventMap>, { type: T }> => event.type === type);
}
