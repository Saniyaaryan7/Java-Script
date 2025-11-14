// Array containing nested arrays at multiple levels
const Arr = [1,2,3,[2,4,6],4,5,[3,9,[5,10]]]

// Flatten the array completely (remove all nested levels)
const newArr = Arr.flat(Infinity) 
// flat(Infinity) ensures the array becomes fully flat, no matter how deep
console.log(newArr);  //[1,2,3,2,4,6,4,5,3,9,5,10]