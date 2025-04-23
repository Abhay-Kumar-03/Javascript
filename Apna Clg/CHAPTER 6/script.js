// let heading = document.getElementById("heading"); //h1
// console.log(heading);

// //-------->>> querySelector
// let firstEl = document.querySelector("p"); // 1st element
// console.dir(firstEl);

// let allEl = document.querySelector("p"); // all element
// console.dir(allEl);

// console.log(document.body.firstChild);

// //------>>> innerText || innerHTML
// let fruitList = document.querySelector(".List");
// console.dir(fruitList);

// let heading1 = document.querySelector("h2");
// console.log(heading1);



//------------>>> practice of above DOM

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " By Abhay Chauhan";


let divs = document.querySelectorAll(".box");
console.log(divs);

let idx = 1;
for(div of divs){
    div.innerText = `new unique text ${idx}`;
    idx++;
}

// divs[0].innerText = "new unique value";
// divs[1].innerText = "new unique value";
// divs[2].innerText = "new unique value";