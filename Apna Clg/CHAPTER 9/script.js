//------------------------>>>> Promises
let promise;
promise = new Promise((resolve, reject)=> {
        console.log("I am a promise");
        
        reject("some error");
});












// //------------------>>>> Sync 
// // Asynchronous
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 3000);

        // console.log("three");
// console.log("four");


// //-------------------->>>> Calbacks
// function sum(a, b){
//     console.log(a+b);
// }
// function calculator(a, b, sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2, sum);



// const hello = () => {
//     console.log("hello");
// };
// setTimeout(hello, 3000);



// //------------------>>>> Callback Hell
// function getData(dataid, getNextData) {

//         setTimeout(() => {
//                 console.log("data", dataid);
//                 if(getNextData){
//                         getNextData();
//                 }
//         }, 2000);
// }

// getData(1, () =>{
//         getData(2, () => {
//                 getData(3, () => {
//                         getData(4);
//                 });
//         });
// });







