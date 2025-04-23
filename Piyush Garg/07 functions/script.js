//----------------->>> Functions

function sayHello() {
  console.log("Hey Abhay");
}

sayHello(); // calling of function


//              argument
function add(a, b, c) {
  console.log(a + b + c);
}
// Parameters
add(5, 10, 57); 
add(107, 38, 0);


function mult(num1,num2){
    console.log(num1*num2);
}
mult(10,59);


function sub(c,d){
    let ans=c-d;
    return ans;
}
let z=sub(10,2);
console.log("Hey User result is",z);



// unlimited arguments
function addNumbers(){
    let ans = 0;
    for(let i=0; i<arguments.length; i++){
        ans = ans + arguments[i];
    }
    return ans;
}

let result = addNumbers(1,232,3,44,87,657,51);
console.log(result);