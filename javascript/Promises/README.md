# Javascript Promises

A promise is a JavaScript object that represents the eventual completion of an asynchronous operation.

Promises have 3 states

- **Pending**: promises are initialized with this state.
- **Fulfilled**: when the promise was successfully resolved, it takes this state.
- **Rejected**: when the promise is rejected.

---

### Creating a Promise

A promise can be created using the `new Promise()` constructor. This constructor takes only one argument, the _Executor Function_, which has two parameters: _resolve_ and _reject_
These methods, resolve and reject, are used to change the status of the promise.

There are 3 methods, among others, that can be called from a promise:

- `.then()` -> runs when the promise is fulfilled
- `.catch()` -> runs when the promise is rejected
- `.finally()` -> runs regardless of the promise state.

then and catch receive one argument, which is the object or primitive returned by the resolve or reject methods.

### `await` operator

Used to wait for a Promise (or thenable object) to get its value when fulfilled. If the promise or thenable object is rejected, it will throw the reason why.

### thenable objects

The JavaScript ecosystem has made multiple Promise implementation before it became a part of the language. Although there are different, all Promise-like objects implement the _Thenable_ inteface. A thenable object implements the `.then()` method.
