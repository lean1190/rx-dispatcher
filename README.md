# [Rx Dispatcher](https://www.npmjs.com/package/rx-dispatcher)

Small Redux-like action dispatcher with RxJs
```
npm i rx-dispatcher
```

## The idea
RxJS is a powerful tool to implement asynchronous communication and Redux-like patterns.

Unfortunately, a lot of tools out there are complex, and require implementing more than a simple event bus.

**This library solves that, by implementing a tiny Redux-like action dispatcher.**

### You can only do 2 things with this library:
- Dispatch an action event
- Observe an action event

### How to use it
```typescript
// 1. Define your map of ActionEvents
enum EventType {
    Example = 'Example',
    OneMore = 'OneMore'
}

type EventMap = {
    [EventType.Example]: { one: string; two: boolean; };
    [EventType.OneMore]: string;
}

// 2. Create a typed dispatcher
const dispatcher = createActionDispatcher<EventMap>();

// 3. Subscribe to dispatched events
dispatcher
    .observe(EventType.Example)
    .subscribe(console.log)

// 4. Dispatch an event
dispatcher.dispatch({
    type: EventType.Example,
    payload: { one: 'hey', two: true }
});
```

## Peer Dependencies
- RxJs 7

## Author
[Lean Vilas](https://github.com/lean1190)

Comments? [Contact me on LinkedIn](https://www.linkedin.com/in/leanvilas/)

## Licence
Apache License 2.0
