import type { Observable } from 'rxjs';

export interface ActionEvent<Type, Payload = unknown> {
    type: Type;
    payload?: Payload;
}

export interface ActionEventMapBase {
    [key: string]: unknown;
}

export type ActionUnion<ActionEventMap extends ActionEventMapBase> = {
    [K in keyof ActionEventMap]: ActionEvent<K, ActionEventMap[K]>
}[keyof ActionEventMap];

export interface ActionDispatcher<ActionEventMap extends ActionEventMapBase> {
    source: Observable<ActionUnion<ActionEventMap>>;
    dispatch: <K extends keyof ActionEventMap>(event: ActionEvent<K, ActionEventMap[K]>) => void;
    observe: <T extends keyof ActionEventMap>(type: T) => Observable<Extract<ActionUnion<ActionEventMap>, { type: T; }>>
}
