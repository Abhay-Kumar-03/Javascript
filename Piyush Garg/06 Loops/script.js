//----------------->> Loops
/*
// For loop
for(let i = 1; i <= 10; i++){
    console.log("Abhay" + i);
}

// While loop
let ip = 0
let house = 50
while(ip != house){
    ip = ip + 1;
    console.log('Steps Taken' + ip)
}

// Do while loop
let ipp = 0;
let housee = 55;
do {
    ipp = ipp + 1;
    console.log("walk" + ipp);
}while(ipp <= housee)
*/

//--->>>>> Gues the input

let number = 40;
let guess = 0;

do {
    guess = parseInt(prompt("Guess the number"));
    if(guess == number){
        alert("Winner");
        break;
    }
}while(guess != 0)
