//------------->>>>Array high order function

// forEach
const students = ["ABhay", "Siri", "Mac", "Bookie"];
students.forEach((val) => console.log(val + "Chauhan"));
students.map((val) => console.log(val));

const numberss = [3,7,2,6,8,1];
console.log(numberss);
function doublee(n){
    return n*2;
}
let Arr = numberss.forEach(doublee);
console.log(Arr);


// map
const number = [1,2,3,4,5];
console.log(number);
function double(n) {
    return n*2;
}
let newArr = number.map(double);
console.log(newArr);


// find
const digits = [32,54,4,90,92];
let ans = digits.find(num => num === 2*2);
console.log(ans);
let anss = digits.findIndex(num => num === 9*10);
console.log(anss);


// filter
const numbe = [1,2,3,4,5,6,7,8];
const neArr = numbe.filter(num => num %2 == 0);
console.log(neArr);


// slice
const numbeers = [1,2,3,4,5,6,0,7,8,9];
let newArra = numbeers.slice(1, 5);
console.log(newArra);


// splice
const numbbers = [1,2,3,4,5,6,7,8,9];
let newar = numbbers.splice(1, 4);
console.log(newar);
console.log(numbbers)
