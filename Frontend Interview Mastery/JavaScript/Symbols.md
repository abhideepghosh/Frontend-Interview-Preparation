## What Are Symbols In JavaScript

- In JavaScript, Symbol is a primitive data type introduced in ECMAScript 6. A symbol is an immutable, unique value that can be used as an identifier for object properties. Symbols are guaranteed to be unique, meaning that two symbols with the same description will never be equal to each other.
- Symbols are often used as keys for object properties, particularly in cases where the property name should be hidden from external code.
- Symbols can also be used to define well-known symbols, which are built-in symbols that have special meaning in JavaScript. For example, the Symbol.iterator symbol is used to define the default iterator for an object, which is used when iterating over an object using a for...of loop.

## Example Of Use Case Of Symbol Primitive Data Type

```
const mySymbol = Symbol("mySymbol");
const myObject = {
[mySymbol]: "This property has a symbol key"
};
console.log(myObject[mySymbol]); // Output: "This property has a symbol key"
```
