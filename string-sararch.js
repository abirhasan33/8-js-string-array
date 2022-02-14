const products = [
    'dill haercor i29 leptop',
    'iphone 1TB camera flashlight Phone',
    'Dill yellow leptop wiht balxck camera',
    '1x59 Lonovo commercial yoga leptop',
    'LG superrnove leptop',
    'HTC low price phone',
    'Dill purple color phone with Leptop'
];

const searching = 'dill';

// indexOf

const output = [];
for( const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product);
    }
}
// console.log(output);

for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        // output.push(product);
    }
}
// console.log(output);

for(const prouct of products){
    if(prouct.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(prouct);
    }
}
console.log(output);



// const str1 = 'Cats are the best!';
// console.log(str1.endsWith('best', 17));
// // expected output: true
// products.indexOf()
// products.includes()
// products.startsWith()
// const comnindet = first.concat(second);
// feiends.includes;
// const words2 = ['a', 'b', 'i', 'r'];
// // const allJoined = words2.join('');
// // const allJoined = words2.join(' ');
// // const allJoined = words2.join(',');
// // const allJoined = words2.join(', ');
// const allJoined = words2.join(' W ');
// console.log(allJoined); 
// const anotherAntherPart = anthem.substring(10, 16);
// const antherPart = anthem.substr(11, 8);
// const samllSlice = anthem.slice(5, 12);