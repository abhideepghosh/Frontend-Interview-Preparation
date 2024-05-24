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
