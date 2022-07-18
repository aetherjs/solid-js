# OOP Playground

JavaScript is fundamentally about objects. Arrays are objects. Functions are objects. Objects are objects. So what are objects? Objects are collections of name-value pairs. The names are strings, and the values are strings, numbers, booleans, and objects (including arrays and functions). Objects are usually implemented as hashtables so values can be retrieved quickly.

If a value is a function, we can consider it a method. When a method of an object is invoked, the this variable is set to the object. The method can then access the instance variables through the this variable.

Objects can be produced by constructors, which are functions which initialize objects. Constructors provide the features that classes provide in other languages, including static variables and methods.

## SOLID Principles

**S.O.L.I.D.** STANDS FOR:

### Single responsibility principle

> 📘 A module should be responsible for only one actor. As a consequence, it has only one reason to change.

A class or function should have one and the only reason to change. Each class should do one thing & do it well. Instead of thinking that we should split code because it would look cleaner in a single file, we split code up based on the users' social structure. Because that's what dictates change. Few things to note:

- Don't put functions in the same class that change for various causes.
- Think responsibilities (reason to change) regarding the user who will use it.
- The class should be low coupling & high cohesive.

Example of single responsibility refactoring can be found in [todolist.js](src/todolist.js).

### Open closed principle

> 📘 Modules should be open for extension but closed for modification.

Software entities (classes, modules, functions, and so on) should be extensible but not modifiable ( no change in old code). The above approach is based on the premise that we should be able to introduce new features without changing the present code.

### Liskov substitution principle

> 📘 If you have a function, that works for a base type, it should work for a derived type

Example can be found in [shapes.js](src/shapes.js) file. We correct the behaviour of the ```Square``` type so that the function defined for parent class ```Rectangle``` works correctly all of the time.

### Interface segregation principle

> 📘 Clients should not be forced to depend upon interfaces that they do not use

This approach aims to reduce the negative consequences of using large interfaces by breaking them down into smaller ones. It's similar to the Single Responsibility Principle, which asserts that any class or interface should be used for only one purpose.

> Note: JS does not have an interface

Clients should not be exposed to methods that they do not require (design a tiny interface that does not force any class or function to use an interface they do not wish to use).

An example (rather limited, cause JS doesn't even have interfaces) can be found in the [phones.js](src/phones.js) file.

### Dependency Inversion principle

> 📘 High-level modules should not depend on low-level modules



## Run With

```node src/index.js```

Additionally can run some assertions/tests with:

```yarn test```