//---->>> the difference b/w var let cons
// var old ka part hai
// var kahi bhi use ho skta hai (var function scoped hota hai)
function abcd(){
    for (var i=1; i<12; i++){
        console.log(i);
    }
    console.log(i);
}
abcd();
// var adds itself to the window
var a = 12;

// let const new js ka part hai
// let const kahi bhi use nhi hota hai(let braces scoped hota hai)
function abcd(){
    for (let i=1; i<12; i++){
        console.log(i);
    }
    // console.log(i);
}
abcd();
// let const does not adds
let b = 198;


//---->>> window object 
// js meh kuch cheze nhi hoti hai pr hum un chezo ko use krte hai joki window ki help se hoti hai 


//---->>> browser context api 
// esme 3 cheze hoti hai 
//  1) window
//  2) stack
//  3) heap


//---->>> stack
// stack vo hota hai jiske hum choti cheze use krte hai jaise ki variables functions bagera bagera


//--->>> heap memory
// heap memory vo hoti hai jo calculation k bech meh ek imaginary memory hoti hai or step to step value store krti hai or last meh hum final answer dakh pate hai
// 3+4+6+4 yeh calculation hai
// 7+6+4   yeh imaginary box hai jaha pr store hoti hai value of calculate hoti hai
// 13+4  same as above
// 17 yeh final hai jo humko chiye hai


//---->>> execution context
// execution context mtlb jab hum function run krnge tab function apna ek imaginary container bana leta hai jisme 3 cheze hoti hai
// 1) variables
// 2) function inside that parent function 
// 3) lexical environment of that function


//---->>> lexical environment
// lexical environment vo hota hai jo humko batata hai ki function kya use kr skta hai or kya use nhi kr skta, scope and scope chain
function abcd(){
    var a=12;
    function efgh(){
        var b=23;
    }
}// esme main function abcd b ki value nhi use kr skta or yeh bat humko lexical environment batata hai 


//---->>> how to copy reference value
var f = [1,2,3,4,5];
var g = [...f];
g.pop();

var obj = {name: "Abhay"};
var copyobj = {...obj};

//---->>> truthy and falsy
// falsy values = 0 false undefined null NaN document.all
// truthy values = jo upar wale meh hai unko chod k 

if(3){
    console.log("hey");
}
else{
    console.log("hello");
}


//---->>> forEach loop
// forEach original array meh change nhi krta temporary me change krta hai

var q = [32,3,4,3,6,46,46,34,87,94];
q.forEach(function(val){
    console.log(val+2);
})


//---->> forin
var obj = {
    name:  "Abhay",
    age: 22,
    city: "Kannauj"
}

for(var key in obj){
    console.log(key, obj[key]);
}


//---->>> callback function
// callback function ek aisa code hota hai jo baad meh chalta hai use hum ek function dedete hai ki jab complete hojana to mere yeh function chala dena, aur jo function hum dete hai vo ek normal function hi hota hai aur hum usse callback function khte hai

setTimeout(function() {
    console.log("2 sec bad ayega");
},2000);


//---->>> first class function
// first class function ka mtlb hota hai ki ap function ko use kr skte ho as a value

function pqrs(v){
    v();
}
pqrs(function(){console.log("hello");})


//---->>> how arrays made behind scenes
var arr = [234,987,54,65];

arr = {
    0:234,
    1:987,
    2:54,
    3:65
}


//---->>> delete object props
var r = {
    name: "Abhay",
    age: 22,
    city: "Kannauj",
}

delete r.age;