function magaFriend (friends){
    if(Array.isArray(friends) == false){
        return 'please provide an array of string'
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const feiends = ['kutub', 'abir', 'hasanBabu', 'sabbbir'];
const myBigBuddy = magaFriend(feiends);
// console.log(myBigBuddy);
if(feiends.indexOf('fox') != -1){
    console.log('abir exissts');
}else{
    console.log("abir dode'not exist")
}
if(feiends.includes('abir')){
    console.log('abir exissts using includes');
}

// concat 
const first = [1, 2, 5];
const second = [4, 5, 6];
const comnindet = first.concat(second);
console.log(comnindet);