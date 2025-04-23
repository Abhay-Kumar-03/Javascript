// // //--------------->>>> inline handling 
// // let btn1 = document.querySelector("#btn1");
// // btn1.onclick = (evt) => {
// //     console.log(evt);
// //     console.log(evt.type);
// //     console.log(evt.target);
// //     console.log(evt.clientX, evt.clientY);
// // };

// // let div = document.querySelector("div");
// // div.onmouseover = (evt) => {
// //     console.log(evt);
// //     console.log(evt.type);
// //     console.log(evt.target);
// //     console.log(evt.clientX, evt.clientY);
// // };


// //----------------->>> Event Listeners
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", (evt) => {
//     console.log("btn1 was clicked - handler1");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// });

// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked - handler2");
// });

// const handler3 = () => {
//     console.log("btn1 was clicked - handler3");
// };

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked - handler4");
// });

// btn1.removeEventListener("click", handler3); // remove 



//--------->>>> Practice
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body")
let curMode = "Light";

modeBtn.addEventListener("click", () => {
    console.log("You are trying to change mode");
    if(curMode == "Light"){
        curMode = "Dark";
        //document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        curMode = "Light";
        //document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    
    console.log(curMode);
});