## Definition Of Synthetic Event

- The SyntheticEvent object contains the same properties and methods as the native event, but is created and managed by React rather than the browser.
- It is designed to be immutable, meaning that you can't modify the properties of the event directly. Instead, you can access the properties of the event by calling methods like event.preventDefault(), event.stopPropagation(), and so on.

## Example of using SyntheticEvent in React

```
import React from 'react';

function handleClick(event) {
  event.preventDefault();
  console.log('Button clicked');
}

function Button() {
  return (
    <button onClick={handleClick}>Click me!</button>
  );
}
```

- In this example, we define a handleClick function that takes a SyntheticEvent object as an argument. The function uses the preventDefault() method to prevent the default action of the button element (in this case, submitting a form). The function also logs a message to the console.
- We then define a Button component that renders a button element with an onClick event handler that calls the handleClick function. When the button is clicked, the handleClick function is called with a SyntheticEvent object as its argument.
- By using SyntheticEvent, we can write cross-browser compatible code that works consistently across different browsers and platforms.
