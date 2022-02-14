const numbers = [3, 4, 6, 8, 9, 15, 19, 26, 20];
// slice 
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

// splice to remove elament forem an arrray 
// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSliced);
// console.log(numbers);

// const numberSplice2 = numbers.splice(4, 3, 777, 888, 333, 999);
const numberSplice2 = numbers.splice(4, 0, 777, 888, 333, 999);
console.log(numberSplice2);
console.log(numbers);

