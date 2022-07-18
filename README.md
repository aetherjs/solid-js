## OOP Playground

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

### Dependency Inversion principle

> 📘 High-level modules should not depend on low-level modules

## Run With

```node src/index.js```

Additionally can run some assertions/tests with:

```yarn test```