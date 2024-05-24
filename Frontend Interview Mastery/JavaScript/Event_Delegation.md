## Definition Of Event Delegation
- Event delegation is a technique in JavaScript that allows you to register a single event listener on a parent element, which can handle events that occur on its child elements.
- This is useful when you have many child elements that need the same event handling logic, because it allows you to avoid registering multiple event listeners on each child element.

## Example Of Event Delegation
- Live Example: [Codepen](https://codepen.io/abhideepghosh/pen/QWBqENR)
```
const buttonContainer = document.getElementById('button-container');
buttonContainer.addEventListener('click', event => {
    if (event.target.nodeName === 'BUTTON') {
        console.log(`Button clicked: ${event.target.textContent}`);
    }
});
```
- In this example, the addEventListener function is used to register a click event listener on the buttonContainer element. When a click event occurs on any of its child elements, the listener checks if the event target is a button element by inspecting the nodeName property. If the event target is a button, the event handling logic is executed.
- This technique works because events in the DOM propagate from the target element to its ancestors, triggering any event listeners that are registered along the way. By registering a single event listener on a parent element, you can handle events that occur on any of its child elements, regardless of their number or how they are dynamically created or removed.

- Event delegation is especially useful in situations where you have a large number of child elements that need the same event handling logic, or when child elements are dynamically created or removed from the DOM. It can help you write more efficient and maintainable code, by reducing the amount of event listeners that need to be registered and allowing you to handle events in a more centralized and flexible way.