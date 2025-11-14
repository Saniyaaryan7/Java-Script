myArr = [2,3,4,6,5,7,9]
myArr.push(10)  // Add element at the end
console.log(myArr);

myArr.pop()    // Remove last element
console.log(myArr);

// ------------------------------------------

myArr.shift()  // Remove first element
console.log(myArr);

myArr.unshift(4)  // Add element at the beginning
console.log(myArr);

// ------------------------------------------

const newArr = [0,8,23,3,4]
console.log(newArr.includes(2));  // Check if 2 exists in array 
console.log(newArr.includes(8));
console.log(newArr.indexOf(23));  // Find index of 23 in array
