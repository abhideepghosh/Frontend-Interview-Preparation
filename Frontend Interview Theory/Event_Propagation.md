## Definition Of Event Propagation
- In JavaScript, event propagation refers to the way in which events are propagated or passed through the DOM (Document Object Model) tree.
- When an event is triggered on an element in the DOM, the event can be handled by the element itself or any of its ancestors, in a process called event propagation.

## There are two types of event propagation in JavaScript: capturing and bubbling.
- In the capturing phase, the event starts at the top of the DOM tree and propagates downwards through the ancestors of the target element. During this phase, the event goes through each ancestor of the target element, triggering any event listeners that are registered for the capturing phase.
- In the bubbling phase, the event starts at the target element and propagates upwards through its ancestors. During this phase, the event goes through each ancestor of the target element, triggering any event listeners that are registered for the bubbling phase.
- When an event is triggered on an element, it goes through both the capturing and bubbling phases, unless the event is explicitly stopped or canceled during one of the phases.
- In JavaScript, event listeners can be registered to handle events during either the capturing or bubbling phase, or both. By default, event listeners are registered for the bubbling phase.

## Here is an example of registering an event listener for the capturing phase in JavaScript:
```
const outerDiv = document.getElementById('outer-div');
outerDiv.addEventListener('click', event => {
    console.log('Capturing phase: ', event.target.id);
}, true);
```

- In this example, the addEventListener function is used to register a click event listener on the outerDiv element, with the third parameter true indicating that the listener should be registered for the capturing phase. When the outerDiv element is clicked, the event will propagate downwards through its ancestors during the capturing phase, triggering the event listener registered for that phase.
- Understanding event propagation is important for managing the behavior of your event listeners and controlling how events are handled in your application. It can also help you avoid unexpected behavior and conflicts between different event listeners that are registered on the same element or its ancestors.