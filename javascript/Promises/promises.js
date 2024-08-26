/*
  Promise definition using the new Promise constructor
	The constructor takes one argument, the Executor Function.
	Executor Function has two parameters: resolve and reject. These are used to modify the state of the promise.
*/

const promise_example = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Promise fulfilled");
    } else {
      reject("Promise rejected");
    }
  }, 1000);
});

/*

  .then method runs if the promise is resolved (fulfilled state)
  .catch method runs if the promise is rejected (rejected state)
  .finally method runs regardless of the state

*/

promise_example
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("End of promise");
  });

const aThenable = {
  then: function (resolve, reject) {
    resolve("something");
  },
};

Promise.resolve(aThenable).then((result) => console.log(result)); //Will log "something"
