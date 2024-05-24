// Write a generic function to add an array object in a json object

function addArrayToObject(obj, key, arr) {
  obj[key] = arr;
  return obj;
}

const myObj = { name: "John", age: 30 };
const myArray = [1, 2, 3];

const newObj = addArrayToObject(myObj, "numbers", myArray);

console.log(newObj);
