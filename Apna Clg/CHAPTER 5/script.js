//----------->>>> functions
function sum(a,b) {
    console.log(a+b);
}

//--------->> Arrow function
let fun = (a,b) => {
    console.log(a*b);
}

//-------->> Question(return no of vowels)

function countVowels(str){
    let count=0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}

//----------->>>> foreach call back function
let arr = ["abhay", "mango", "momoos", "delhi"];
arr.forEach((val, index) => {
    console.log(val.toUpperCase(),index);  
});

arr.forEach((val, index, arr) => {
    console.log(val,index, arr);  
});


//----------->>>> Question(square of each no in array)
let numbers = [1,2,3,4,5,7];

let calSquare =(num) =>{
    console.log(num**2);
}

numbers.forEach(calSquare);


//----------->>>> Map
let ar = [425,24,57,98];

let newArr = ar.map((val) => {
    return val*2;
});

console.log(newArr);


//--------->>> filter
let array = [1,2,3,4,5,6,7,8,9];

let evenArray = array.filter((val) =>{
    return val % 2 === 0;
});

console.log(evenArray);


//---------->>> reduce
let numb = [1,2,3,101,4,5];

const output = numb.reduce((prev, curr) =>{
    return prev + curr;
});
console.log(output);

const result = numb.reduce((prev, curr)=>{
    return prev > curr ? prev : curr;
});
console.log(result);


//-------->>> question

let n = prompt("Enter a number: ");
let aray = [];
for(let i=1; i<=n; i++){
    aray[i-1] = i;
};
console.log(aray);

const suum = aray.reduce((prev, curr)=> {
    return prev+curr;
});
console.log(suum);

const product = aray.reduce((prev, curr)=> {
    return prev*curr;
});
console.log(product);
