import { createActionDispatcher } from '../src/dispatcher/dispatcher';

enum EventType {
    New = 'New',
    OneMore = 'OneMore'
}

type EventMap = {
    [EventType.New]: { aProperty: string; anotherProperty: boolean; };
    [EventType.OneMore]: string;
}

const dispatcher = createActionDispatcher<EventMap>();

// Logging a specific event With the 'observe' function
dispatcher
    .observe(EventType.New)
    .subscribe(({ type, payload }) => console.log(`${type} event | Payload: ${JSON.stringify(payload)}\n`));

// Logging everything
dispatcher
    .source
    .subscribe(({ type, payload }) => console.log(`Event: ${type} | Payload: ${JSON.stringify(payload)}\n`));

// Dispatch with payload type safety
dispatcher.dispatch({
    type: EventType.New,
    payload: { aProperty: 'hey', anotherProperty: true }
});

dispatcher.dispatch({
    type: EventType.OneMore,
    payload: 'hi there'
});

// Payload is optional
dispatcher.dispatch({ type: EventType.New });
