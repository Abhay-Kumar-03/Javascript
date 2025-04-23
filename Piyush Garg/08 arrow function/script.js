//----->>>Arrow Functions

//--->1.Syntax
const sayHello=()=>{
    console.log("Heyy");
};
sayHello();


const add=(a,b)=>{
    return a+b;
};
console.log(add(2,3));


const addv2=(a,b)=> a+b; //one liner
console.log(addv2(2,9));



//--->2.'arguments' keyword
const addNumbers = (...nums) => {
    console.log(nums);
}
addNumbers(10,426,46,82);



//--->3. Hoisting
sayHeyy();
function sayHeyy(){
    console.log("Hey there");
}

//this can not be happen
// sayHeyy();
// const sayHeyy = () => {
//     console.log("Hey there");
// }



//--->4. this Keyword
const obj={
    value: 20,
    myFunction: function () {
        console.log(this);
    },
};
obj.myFunction();