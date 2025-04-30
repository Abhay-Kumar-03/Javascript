let marks = [98, 76, 43, "not present", 90, 68, false, 31];
console.log(marks);
console.log(marks[3]);
console.log(marks[6]);
marks[6] = 76;
console.log(marks[6]);
console.log(marks[8]);
console.log(marks);

console.log("length = ", marks.length);

// Array Methods
let num = [1, 2, 3, 4, 51 ,62 ,7];
let b = num.toString();
console.log(b , typeof b);

let c = num.join(" and ");
console.log(c, "& this is " + typeof c);

let d = num.pop()
console.log(d, num);

let e = num.push(56)
console.log(e, num)

let f = num.shift()
console.log(f, num)

let g = num.unshift(1)
console.log(g, num)

let compare =(a, b)=>{
    return a-b
}

let newNum = [1,2,43,74,55,276,27,18,59]
console.log(newNum.length)
delete newNum[0]
console.log(newNum)
console.log(newNum.length)

let newArr = newNum.concat(num);
console.log(newArr);
console.log(newNum);
console.log(num)

newNum.sort()
console.log(newNum);

newNum.sort(compare);
console.log(newNum);

newNum.reverse()
console.log(newNum)
newNum.reverse()

let deletedValues = newNum.splice(2, 4, 1021, 1023, 3045)
console.log(newNum);
console.log(deletedValues);

let newNum2 = newNum.slice(3,5)
console.log(newNum2)


// Loops in Array

let myArr = [1, 2, 3,4 ,5 , 6, 7, 8, 9];

for(let i=0; i<myArr.length; i++) {
    console.log(myArr[i])
}

myArr.forEach((element)=>{
    console.log(element*element)
})

let name = "Abhay"
let nameArr = Array.from(name)
console.log(nameArr)

for(let item of myArr){
    console.log(item)
}

for(let i in num){
    console.log(num[i])
}


// Array Map method  - in this we get a new array and it will not impact on our main array
let myAr = [45, 34, 67]

myAr.map((value)=>{
    console.log(value)
})

let y = myAr.map((value)=>{
    console.log(value)
    return value+1
})
console.log(y)

let x = myAr.map((value, index, array)=>{
    console.log(value, index, array)
    return value+index
})
console.log(x)


// Array filter method  - in this we get a new array and our old array will same and doesn't have any impact
let myAr2 = [34, 12, 45, 0, 7, 11, 48]

let z = myAr2.filter((value)=>{
    return value < 15;
})
console.log(z, myAr2)



// Array reduce method   
let myAr3 = [4, 8, 2, 5, 9, 6];

let newarr = myAr3.reduce((h1, h2)=>{
    return h1+h2
})
console.log(newarr)

const reduce_func = (h1, h2)=>{
    return h1+h2
}
let newarr2 = myAr3.reduce(reduce_func)
console.log(newarr2)