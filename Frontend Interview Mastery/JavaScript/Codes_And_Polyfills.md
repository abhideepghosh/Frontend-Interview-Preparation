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

