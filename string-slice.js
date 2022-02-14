const anthem = 'Amr Sonsr Bangla Ami Tomay Valobashi';
const words = anthem.split(' ');
const withouta = anthem.split('a');
// console.log(withouta);

// slice 
const samllSlice = anthem.slice(5, 12);
console.log(samllSlice);

// substr 
const antherPart = anthem.substr(11, 8);
console.log(antherPart);

// substring
const anotherAntherPart = anthem.substring(10, 16);
console.log(anotherAntherPart);

// concat 
const fist = 'amader';
const second = 'City';
// const fullSting = fist + second;
const fullSting = fist.concat(second).concat(' ABC').concat(' RJ Abir');
console.log(fullSting);

//
const words2 = ['a', 'b', 'i', 'r'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
const allJoined = words2.join(' W ');
console.log(allJoined); 