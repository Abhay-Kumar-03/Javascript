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