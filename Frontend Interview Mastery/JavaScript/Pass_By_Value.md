## Is JavaScript Pass By Value Or Pass By Reference Language

- JavaScript is a "pass by value" language. However, it can appear to behave like "pass by reference" in some cases, particularly when working with objects and arrays.
- When a primitive value (e.g., string, number, boolean) is passed as an argument to a function, a copy of that value is created and passed to the function. Any changes made to the value within the function do not affect the original value outside the function.
- On the other hand, when an object or array is passed as an argument to a function, a reference to the original object or array is passed. This means that changes made to the object or array within the function will also affect the original object or array outside the function. However, the reference itself is still passed by value.
