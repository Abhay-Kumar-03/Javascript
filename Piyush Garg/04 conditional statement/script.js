//----------------->> conditional statement
const age = 80;
if(age>=80){
    console.log("yes, you are adult")
}
else if (age>=18){
    console.log('yes,you can vote');
}
else {
    console.log('you, can not vote')
}

//-----> Ternary Operator
const agge = 27;

agge >= 18 ? console.log('yes') : console.log('no');

let result = agge >= 18 ? 'yes' : 'no';
console.log(result);


//----------------->> switch statement 
const option = 7;

switch(option) {
    case 1:{
        console.log("Namaste!");
    }
    break;
    case 2: console.log("Bonjor!")
    break;
    case 3:{
        console.log("hello!");
    }
    default: console.log("Invalid option!")   
}

let a = 30;
let opt = '+';
let b = 40;

switch(opt){
    case'+':console.log(a + b);
    break;
    case'-':console.log(b - a);
    break;
    case'*':console.log(a * b);
    break;
    default:console.log(lundk);
}