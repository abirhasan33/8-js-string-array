function addNumber(num1, num2){
    let rudul = 0;
    for(const num of arguments){
        rudul = rudul + num;
    }
    return rudul;
}
const sum = addNumber(23, 13, 50, 100, 420, 500);
// console.log(sum);

function getfullname(firstName, lastName){
    let fullName = ' ';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getfullname('sorhab', 'Cele', 'abir', 'hasan', 'and', 'iove you papa');
console.log(name);