const numbers = [6, 7, 3,9,1,8,2,4];
const sortedNubers = numbers.sort();
// console.log(sortedNubers);
const frends = ['abir', 'hasan', 'jakir', 'babu', 'cabi', 'emon'];
// const sortedFriend = frends.sort();
// console.log(sortedFriend);
// const sortedFriend = frends.reverse();
// console.log(sortedFriend);
const sortedReversFriend = frends.sort().reverse();
console.log(sortedReversFriend);

// number soting fun 
const bigNumber = [66, 77, 33, 88, 2, 9, 11, 8, 1];
const sotteBigNumber = bigNumber.sort(function (a, b){
    return a-b;
})
console.log(sotteBigNumber);
