// Write A Custom Flattening Array Function Equivalent To arrayName.flat();

const nums = [[1, 2], [3, 4], [5, 6,[7, 8], 9], [10, 11, 12]];
/*
// To Flatten The Array Once
const flattened = [].concat(...nums);
*/

const customFlat = (nums, depth = 1) => {
	const result = [];
	nums.forEach((num) => {
		if(Array.isArray(num) && depth > 0) {
			result.push(...customFlat(num, depth - 1));
		}
		else {
			result.push(num);
		}
	});
	return result;
}

const flattened = customFlat(nums,2);
console.log(flattened);