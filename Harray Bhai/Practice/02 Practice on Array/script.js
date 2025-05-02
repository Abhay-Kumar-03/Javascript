/*
// Question-1
// create an array of number and take input from user and then add that number in array
let arr = [1, 2, 3, 4, 5, 6, 7]
        let a = prompt("enter a number")
        a = Number.parseInt(a)
        arr.push(a)
        console.log(arr)



// Question-2
let arr = [1, 2, 3, 4, 5, 6, 7]
do{
    let a = prompt("enter number")
    a = Number.parseInt(a)
    arr.push(a)
    console.log(arr)
}while(a!=0)



// Question-3
// use filter method in array and print number divisible by 10
let arr3 = [1, 2, 30, 4, 5, 60, 7]
let c = arr.filter((x)=>{
    return x%10 == 0
})
console.log(a)



// Question-4
// give square of all number which is present in arra
let arr4 = [1, 2, 3, 9, 5, 60, 7]
let d = arr4.map((x)=>{
    return x*x
})
console.log(d)

*/


//Question-5
// multiply of all number in arr
let arr5 = [1, 2, 3, 4];
let e = arr5.reduce((h1, h2) => {
  return h1 * h2;
});
console.log(e);
