# OOP Playground

JavaScript is fundamentally about objects. Arrays are objects. Functions are objects. Objects are objects. So what are objects? Objects are collections of name-value pairs. The names are strings, and the values are strings, numbers, booleans, and objects (including arrays and functions). Objects are usually implemented as hashtables so values can be retrieved quickly.

If a value is a function, we can consider it a method. When a method of an object is invoked, the this variable is set to the object. The method can then access the instance variables through the this variable.

Objects can be produced by constructors, which are functions which initialize objects. Constructors provide the features that classes provide in other languages, including static variables and methods.

## SOLID Principles

**S.O.L.I.D.** STANDS FOR:

### Single responsibility principle

> 📘 A module should be responsible for only one actor. As a consequence, it has only one reason to change.

Example of single responsibility refactoring can be found in [todolist.js](src/todolist.js).

### Open closed principle

> 📘 Modules should be open for extension but closed for modification.

### Liskov substitution principle

> 📘 If you have a function, that works for a base type, it should work for a derived type

Example can be found in [shapes.js](src/shapes.js) file. We correct the behaviour of the ```Square``` type so that the function defined for parent class ```Rectangle``` works correctly all of the time.

### Interface segregation principle

> 📘 Clients should not be forced to depend upon interfaces that they do not use

An example (rather limited, cause JS doesn't even have interfaces) can be found in the [phones.js](src/phones.js) file.

### Dependency Inversion principle

> 📘 High-level modules should not depend on low-level modules

## Run With

```node src/index.js```

Additionally can run some assertions/tests with:

```yarn test```