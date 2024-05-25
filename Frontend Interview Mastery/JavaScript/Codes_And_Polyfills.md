## Infinite Currying
```js
const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

// Currying
const currySum = (a) => {
  return function (b) {
    if(b) return currySum(a + b); 
    else return a;
  }
}

console.log(sum(10,20,30,40)); // Output: 100
console.log(currySum(10)(20)(30)(40)()); // Output: 100   
```
## Map Prototype
```js
Array.prototype.myMap = function (cb) {
  const result = [];
  for(let i=0; i<this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
}
const arr = [1,2,3,4,5];
// Square the Elements of an Array 
const result = arr.myMap((el, i) => el ** 2);
console.log(result);
```
## ForEach
```js
const arr = [1,2,3,4,5];
Array.prototype.myForEach = function (cb) {
  for(let i=0; i<this.length; i++) {
    cb(this[i], i, this);
  }
}

let sum = 0;
arr.myForEach((el, i) => {
  sum += el;
});
console.log(sum); // Output: 15
```
## Filter
```js
const arr = [1,2,3,4,5];
Array.prototype.myFilter = function(cb) {
  const result = [];
  for(let i=0; i<this.length; i++) {
    if(cb(this[i], i, this)) result.push(this[i]);
  }
  return result;
}
const result = arr.myFilter((el, i) => el % 2 === 0);
console.log(result); // Output: [2, 4]
```

## Promise.all
```js
// Polyfill for Promise.all
Promise.myAll = function(promises) {
  return new Promise((resolve, reject) => {
    // Check if the input is an array
    if (!Array.isArray(promises)) return reject(new Error('Not iterable'));

    // Initialize counters and results array
    let resolvedCount = 0;
    const promisesLength = promises.length;
    const results = [];

    // If the input array is empty, resolve immediately with an empty array
    if (promisesLength === 0) return resolve(results);

    // Iterate over each promise in the array
    for (let idx = 0; idx < promisesLength; idx++) {
      // Convert non-promise values to promises using Promise.resolve
      Promise.resolve(promises[idx]).then(value => {
        // Store the resolved value in the results array
        results[idx] = value;
        resolvedCount++;
        // If all promises are resolved, resolve the main promise
        if (resolvedCount === promisesLength) resolve(results);
      }).catch(err => {
        // If any promise rejects, reject the main promise
        reject(err);
      });
    }
  });
};

// Example usage of the polyfill
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'foo');
});

// Using the custom Promise.myAll method
Promise.myAll([promise1, promise2, promise3]).then(values => {
  console.log(values); // Output: [3, 42, 'foo']
}).catch(error => {
  console.error(error);
});
```
## Promise.race
```js
// Promise.race
Promise.myRace = function(promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) return reject(new Error('Not iterable'));
    for(let promise of promises) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
}

// Example usage of the polyfill
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'two'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 300, 'three'));

// Using the custom Promise.myRace method
Promise.myRace([promise1, promise2, promise3]).then(value => {
  console.log(value); // Output: 'one'
}).catch(error => {
  console.error(error); 
});
```
