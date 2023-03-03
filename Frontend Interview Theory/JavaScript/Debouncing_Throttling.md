## Differences Between Debouncing And Throttling

- Debouncing and throttling are two techniques used in JavaScript to optimize the performance of event handlers that are triggered frequently, such as those handling scroll, resize, or input events. Although they are both used to limit the frequency of function calls, they work in slightly different ways.
- The main difference between debouncing and throttling is how they handle the timing of function calls.
  - Debouncing delays the execution of a function until a certain amount of time has passed since the last function call.
  - In contrast, throttling limits the frequency of function calls by delaying subsequent function calls until after a certain amount of time has passed since the last function call.
