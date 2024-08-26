# JavaScript

### Characteristics of JavaScript

- `Multi-Paradigm`: supports object-oriented, declarative (functional) and imperative programming styles.
- `Prototype-based`: classes are not explicitly defined, they're derived by adding properties and methods to an instance of another class or adding them to an empty object.
- `Dynamic typing`: the interpreter assigns variable a type based on the variable's value an runtime.
- `First-class functions`: this means that functions can be treated as variables, they (functions) can be assigned to variables or passed as arguments to other functions.
- `Interpreted`: it's JIT copiled.
- `Single-threaded`: when running multiple tasks at the "same time", JavaScript uses a single thread which can be described as a unit capable of executing code.

### JavaScript Engine

How JavaScript handles the execution of code:

1. `Loading the script`
2. `Parsing the code`: the parses reads through the source code, checks for syntax errors and finally, converts the source code into the AST (Abstract Sytanx Tree).
3. `Compilation`: the AST is converted into **bytecode** or **machine code**, modern engines use JIT compilation for performance optimization.
4.

### Execution Context

JavaScript runs on a single thread, which makes it synchronous at its core. Any functions that are gonna be executed are placed into del **call stack** which is a data structure that implements the **LIFO** method.

### Static methods

A static method is a method that it's called upong a class itself, not an instance. They don't have access to the "this" object. Examples: Promise.all(params), Math.rand(), etc. They usually provide functionality associated with the class.

### Instance methods

An instance method is a method that belongs to a specific instance of a class. They have access to the "this" object and they are usually meant to transform the values of the instance properties.
