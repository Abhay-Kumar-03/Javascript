// //----------------->>>>>>> Objects & Classes

// const student = {
//     name: "Abhay",
//     age: 21,
//     printMarks: function() {
//         console.log("marks =", this.marks); // this means student.marks (this refers to student)
//     }
// }



// const employee = {
//     calTax() {
//         console.log("tax rate is 10%");
//     }
// }

// const KaranArjun = {
//     salary: 50000,
// };

// KaranArjun.__proto__ = employee;


// //----------------->>>>>>>Classes
// class ToyataCar {
//     constructor(brand, milage) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.milage = milage;
//     }

//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }
// }

// let fortuner = new ToyataCar("fortuner", 10);
// console.log(fortuner);
// let lexus = new ToyataCar();
// console.log(lexus);




// //------------------->>> inheritance
// class parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class child extends parent {}
// let obj = new child();

// class person {
//     constructor(){
//         console.log("enter parent constructor");
//         this.species = "home sapiens"
//     }

//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class engineer extends person {
//     constructor(branch){
//         console.log("enter child constructor");
//         super();     // to pass info from child class to parent class
//         this.branch = branch; 
//         console.log("exit child constructor");
//     }
//     work(){
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }


// let engobj = new engineer("chemical engineer");



//----------------------->>>>>> Practice 
let data = "secrete info";
class user{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewdata(){
        console.log("data = ", data);
    }
}

class admin extends user {
    constructor(name, email){
        super(name, email);
    }
    editdata(){
        data = "some new info";
    }
}

let student1 = new user("abhay", "abhay@gamil.com");
let student2 = new user("ashi", "ashi@gamil.com");

let admin1 = new admin("admin", "admin@gmail.com");