/*
//----------->>>> airthmetic operators
let a = 5,
  b = 3;
console.log(a + b);

// exponentiation (a ** b = a^b)
console.log("a ** b = ", a ** b); // 5^3

// equal to & type ( === )
let c = "5";
console.log("a === c", a === c);


// dual not eqal to ( !== )
console.log("a !== b", a !== c);

//----------->>> conditional statements

let age = 18;
if (age >= 18) {
  console.log("You can Vote");
}
if (age < 18) {
  console.log("You can not vote");
}

let color;
let mode = "dark";

if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(color);


//--------------->>>> Ternary operator

let age = 22;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);
age >= 18 ? console.log("adult") : console.log("not adult");


//---------------------->>>>>>
//alert("hello");

let name = prompt("Abhay")
console.log(name);


//question-1 (number is a multiple of 5)
let num = prompt("Enter a Number");

if  (num % 5 === 0) {
    console.log(num, "Number is a multiple of 5");
}
else {
    console.log(num ,"Number is not a multiple of 5 ")
}
*/

//question-2 (give grade to students)
let number = prompt("Enter Score of the student");
let garde;

if(number > 100){
    console.log("Wrong input");
}
else if(number>=90 && number <=100){
    grade="A";
}
else if(number>=70 && number <=89){
    grade="B";
}
else if(number>=60 && number <=69){
    grade="C";
}
else if(number>=50 && number <=59){
    grade="D";
}
else if(number>=0 && number <=49){
    grade="F";
}
console.log(grade);
