## Definition Of Hoisting

- Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes (either global or local) during the compilation phase, before the code is actually executed.
- It is important to note that hoisting only applies to declarations, not to initializations or assignments. So while variable and function declarations are moved to the top of their scopes, their values are not assigned until their respective lines of code are actually executed.

## Definition Of Temporal Dead Zone (TDZ)

- Temporal Dead Zone (TDZ) is a behavior in JavaScript where accessing a variable before it is declared results in a ReferenceError.
- The TDZ is the period of time between the start of a block (or function) and the point where a variable is declared, where the variable exists but cannot be accessed.
- In ES6, the let and const keywords were introduced to replace var for variable declarations. Unlike var, which is hoisted to the top of its scope and initialized with the value undefined, let and const are not hoisted and are not initialized until they are declared in the code.
- It is important to note that the TDZ only applies to variables declared with let and const, not to variables declared with var.

## Ways To Avoid Hoisting Based Bugs

- Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes. This can sometimes lead to unexpected behavior, especially when dealing with global variables.
- Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes. This can sometimes lead to unexpected behavior, especially when dealing with global variables.
  - For example, in strict mode, using a variable without declaring it first will throw a reference error, instead of creating a global variable as it would in non-strict mode.
- In addition, it's good practice to declare all variables using let or const instead of var, as let and const have block scope and do not allow for redeclaration, which can help avoid certain types of bugs.
