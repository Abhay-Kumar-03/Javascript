//---------->>> Loops
/*

// for loop
for(let count =1 ; count<=5; count++){
    console.log("Abhay Chauhan");
}

// calculate sum of 1 to 5
let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}
console.log(sum);


// while loop
let i=1;
while(i<=5){
    console.log("Abhay");
    i++;
}


// do while loop
let i = 1;
do {
    console.log("Abhay");
    i++;
}while(i <= 5);


// for of loop (specialy for arr and strings)
let str ="Abhay";
for (let i of str){
    console.log(i);
}


// for in loop (can also use for objects)
let student = {
    name: "Rahul kumar",
    age: 21,
    cgpa: 9,
    isPass: true
};

for (let i in student){
    console.log(i, "value=", student[i]);
};


// Q(1)-> print all even no from 0 to 100
for(let num=0; num<=100; num++){
    if(num % 2 === 0){
        console.log(num);
    }
}


// Q(2)-> guessing the number game
let guessNum = 45;
let userNum = prompt("Guess the Number");

while(userNum != guessNum){
    userNum = prompt("You Guess the Wrong Number, Guess Again:");
} 

console.log("You Guess the Correct Number");
console.log("");


// ---------------------->>>> Strings

let str1 = "Abhay";
let str2 = 'Chauhan';
console.log(str1);
console.log(str2[4]);

//----------------->>>>>> Templete Literals
let sentence = `Abhay this side`;
console.log(typeof sentence);

let obj = {
    item: "pen",
    price: 10,
};

//console.log("the cost of", obj.item, "is", obj.price, "rupees");   ->(int simple way)

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("Abhay\nChauhan");
console.log("Abhay\tChauhan")



//-------String Methods
let str = "Abhay Chauhan";
console.log(str);

let str1= str.toUpperCase()
console.log(str1)

let str1= str.toLowerCase()
console.log(str1)


let str2 = "   Abhay     Chauhan   ";
console.log(str.trim()); 


let str3 = "ABHAYCHAUHAN";
console.log(str3.slice(3));
console.log(str3.slice(4,8));


let str4="ABHAY";
let str5="CHAUHAN";
let res=str4.concat(str5);
console.log(res); 


let str = "abhaychauhan";
console.log(str.replace("a","d"));
console.log(str.replaceAll("a","d")); 


let str ="abhaychauhan";
console.log(str.charAt(3)); */

//---------------->>> Question
let fullname=prompt("Enter Your FullName");
console.log(fullname);
let username = "@" + fullname +fullname.length;
console.log(username);
