## Definition Of Prototype Inheritance

- In JavaScript, prototype inheritance is a mechanism by which objects inherit properties and methods from a prototype object. Each object in JavaScript has an associated prototype object, which serves as a template or blueprint for that object.
- When a property or method is accessed on an object, if that property or method does not exist on the object itself, JavaScript will look for it on the object's prototype. If the property or method is not found on the prototype, JavaScript will continue up the prototype chain until it reaches the top-level Object.prototype.
- To create a prototype, you can define a constructor function and add properties and methods to the constructor's prototype property. Any object created with this constructor will then inherit those properties and methods from the prototype.

## Example Of Prototype Inheritance

```
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
}

const john = new Person("John");
john.sayHello(); // logs "Hello, my name is John"
```

- In this example, we define a constructor function Person, which takes a name parameter and sets it as a property on the object created by the constructor. We then add a method sayHello to the Person constructor's prototype, which logs a greeting using the object's name property.
- When we create a new object using the Person constructor (var john = new Person("John")), the john object inherits the sayHello method from the Person constructor's prototype, and we can call john.sayHello() to log the greeting.
