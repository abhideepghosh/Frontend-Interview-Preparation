## What are Design Patterns?
1. Design patterns are reusable solutions to common problems that arise in software design. They represent best practices for solving certain types of problems and provide a template for creating flexible and maintainable code.
2. Design patterns are not specific to a particular problem or programming language; rather, they are general guidelines that can be adapted to various situations.

## Key Aspects/Advantages of Design Patterns:
1. **Reusability**: Design patterns promote the reuse of proven solutions to common design problems. Instead of starting from scratch, developers can apply established patterns to solve specific issues.
2. **Abstraction**: Patterns provide a level of abstraction, allowing developers to focus on high-level design concepts without getting bogged down in implementation details. This abstraction helps in creating more modular and understandable code.
3. **Common Vocabulary**: Design patterns provide a common vocabulary for developers to discuss and communicate about software design. This shared language makes it easier for team members to understand and collaborate on a project.
4. **Scalability**: Design patterns contribute to scalable software by offering solutions that can be applied to different scales of complexity. Whether working on a small project or a large enterprise application, design patterns help manage complexity and maintainability.
5. **Proven Solutions**: Design patterns are based on proven solutions to recurring design problems. They encapsulate the collective experience of the software development community, offering reliable and well-tested solutions.

> Design patterns are solutions to frequently occurring real-life problems in software design. They can also be considered customizable templates that can meet the requirements of a particular design problem.

## Structure of Design Patterns
1. Pattern name: This is an identification step that describes a design problem.
2. Intent: This step describes the use case of the particular design pattern.
3. Motivation: This step illustrates the problem and talks about the inner components in the pattern to solve the problem.
4. Structure: This step visualizes the structure using a graphical representation of the classes in the pattern.
5. Consequences: This step describes the trade-offs of a particular pattern.
6. Implementation: This step illustrates an example of code in any popular programming language.

## Limitations of Design Patterns
1. Design patterns can complicate the architecture of the application if they are managed poorly.
2. Developers who are not familiar with them might end up getting confused as to why certain patterns are being used.

## Classification of Design Patterns

### Creational Design Patterns
+ Creational design patterns are a specific category of design patterns that focus on the process of object creation. They provide alternative ways to instantiate objects, aiming to improve the flexibility, maintainability, and efficiency of your code. This enables us to:
	- Decouple object creation from code that uses them: This avoids tight coupling between specific object types and allows you to change how objects are created without affecting the rest of your program.
	- Promote loose coupling and flexibility: Makes it easier to switch between different implementations of the same type of object.
	- Reduce boilerplate code and improve maintainability: By centralizing object creation logic, you avoid repeating the same code multiple times.
	- Support different object creation mechanisms: Different creational patterns cater to various scenarios, like hiding specific implementations, managing resource allocation, or building complex objects step-by-step.
+ Some common Creational design patterns:
	- Singleton: Ensures only one instance of a class exists. Useful for global access points or resource managers.
	- Factory Method: Creates objects without specifying their exact type, allowing for different implementations based on context.
	- Abstract Factory: Creates families of related objects, promoting consistency and simplifying client code.
	- Builder: Constructs complex objects step-by-step, allowing for customization and variation in construction.
	- Prototype: Creates new objects by copying existing ones, simplifying object creation for similar objects.
	- Object Pool: Pre-creates and manages a pool of objects to avoid expensive creation and destruction overhead.

### Structural Design Pattern
+ Structural design patterns are a category of design patterns that deal with the composition of classes or objects to form larger structures. These patterns focus on simplifying the organization of a system's components, making it easier to understand and maintain. The main structural design patterns include:
	- Adapter Pattern: Allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.
	- Bridge Pattern: Separates an abstraction from its implementation so that the two can vary independently. It involves creating a bridge interface that uses composition to connect different parts of a system.
	- Composite Pattern: Composes objects into tree structures to represent part-whole hierarchies. It allows clients to treat individual objects and compositions of objects uniformly.
	- Decorator Pattern: Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
	- Facade Pattern: Provides a simplified, higher-level interface to a set of interfaces in a subsystem. It defines a unified interface to a set of interfaces in a subsystem to make it easier to use.
	- Flyweight Pattern: Minimizes memory usage or computational expenses by sharing as much as possible with related objects. It is useful when a large number of similar objects need to be created.
	- Proxy Pattern: Provides a surrogate or placeholder for another object to control access to it. It can be used for various purposes such as lazy loading, access control, logging, etc.

### Behavioural Design Patterns
+ Behavioral design patterns are a category of design patterns that deal with the interaction and communication between objects. These patterns define the ways in which objects collaborate and communicate to accomplish a common goal. Behavioral patterns focus on the assignment of responsibilities between objects and the flow of communication between them. Some of the key behavioral design patterns include:
	- Chain of Responsibility Pattern: Passes a request along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
	- Command Pattern: Encapsulates a request as an object, thereby allowing for parameterization of clients with different requests, queuing of requests, and logging of the requests. It also provides support for undoable operations.
	- Interpreter Pattern: Defines a grammar for interpreting the sentences in a language and provides an interpreter to interpret the sentences. It is useful for creating a language interpreter or compiler.
	- Iterator Pattern: Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. It separates the traversal of an object from its structure.
	- Mediator Pattern: Defines an object that centralizes communication between a set of objects. It promotes loose coupling by keeping objects from referring to each other explicitly, allowing them to communicate through the mediator.
	- Memento Pattern: Captures and externalizes an object's internal state so that it can be restored to this state later. It is often used to implement undo mechanisms.
	- Observer Pattern: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. It is commonly used for implementing distributed event handling systems.
	- State Pattern: Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.
	- Strategy Pattern: Defines a family of algorithms, encapsulates each algorithm, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
	- Template Method Pattern: Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
	- Visitor Pattern: Represents an operation to be performed on the elements of an object structure. It lets you define a new operation without changing the classes of the elements on which it operates.

### Architectural Design Patterns
+ Architectural design patterns are high-level patterns that address the overall structure and organization of software systems. Unlike the more granular design patterns (such as creational, structural, and behavioral patterns), architectural patterns provide guidance for organizing and structuring entire applications or systems.
+ They help define the relationships between major components, modules, and subsystems. Here are some common architectural design patterns:
	- Model-View-Controller (MVC) Pattern: Separates an application into three interconnected components: Model (represents data and business logic), View (displays the user interface), and Controller (handles user input and updates the Model and View).
	- Model-View-ViewModel (MVVM) Pattern: Similar to MVC, but with an emphasis on the separation of concerns between the View and the Model. It introduces a ViewModel that mediates communication between the View and the Model.
	- Layered Architecture Pattern: Organizes the application into multiple horizontal layers, each responsible for a specific set of functionalities. Common layers include Presentation, Business Logic, and Data Access.
	- Microservices Architecture Pattern: Decomposes a system into a set of small, independent services that communicate with each other through well-defined APIs. Each service is responsible for a specific business capability and can be developed and deployed independently.
	- Service-Oriented Architecture (SOA): Designs the application as a set of loosely coupled, independent services that communicate through standard protocols. Services can be reused across multiple applications.
	- Event-Driven Architecture (EDA): Emphasizes the production, detection, consumption, and reaction to events. Components communicate by producing and consuming events, allowing for flexibility and scalability.
	- Hexagonal Architecture (Ports and Adapters): Separates the application into layers with the core business logic in the center, surrounded by "ports" (interfaces to the outside world) and "adapters" (implementations of those interfaces).
	- Repository Pattern: Centralizes the data access logic in a single component called a repository. This pattern is often used in conjunction with other architectural patterns.
	- Pipeline (or Pipes and Filters) Pattern: Divides a processing task into a sequence of independent processing steps (filters) connected by channels (pipes). Each step performs a specific function, and data flows through the pipeline.
	- Space-Based Architecture: Distributes data and processing across a cluster of nodes. It is particularly useful for achieving scalability, high availability, and fault tolerance in distributed systems.
	- CQRS (Command Query Responsibility Segregation) Pattern: Separates the command (write) and query (read) responsibilities of a system, using different models for each. It can help optimize performance and scalability.
