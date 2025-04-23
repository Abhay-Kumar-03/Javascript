//---->> word vs keyword
//papa = word 
//for = keyword

//---->> variables and constants and let
//var
//const
//let

//---->> hoisting [banane se pahle use kr skte hai]
var a=12;
var a;
a=12;

//---->> Types in Js [primitive and reference]
//reference = [] {} ()
//aise koi bhi value jisko copy krne pr real value copy nhi hoti, balki us main value of reference value kahte hai, aur jiska copy krne pr real value copy ho jaye wo value primitive type value hoti hai

//---->> conditionals - is , else , else-if
//jab agar magar hota hai tab ya aisa baisa wala seen hota hai

//---->> Loops
//repeat
for(var i=0;i<11;i++){
    console.log(i);
}

while(a<20){
    a++;
}

//---->> functions [use code for future || reuse kr skte hai code ko || reuse with diff values]
function abcd(a,b,c){
    console.log(a,b,c);
}

abcd(12,13,14);
//arguments = real value jo hum dete hai function chalaate waqt
//parameter = variables jisme value store hoti hai arguments waali

//---->> Arrays 
//var a=[1,2,3,345,42];

//---->> push pop shift unshift splice
// unshift = value dalne k liye at our place
// shift = value hatane k lie at our place
// splice = value remove krne k liye ek interval meh
var arr = [122,22,3,86,9];
arr.splice(2,1);

//---->> objects [ek chez k bareme sari bat krni || details ]
var obj = {name: "abhay"};
console.log(obj);



