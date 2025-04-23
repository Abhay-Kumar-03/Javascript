/*
//------------------>>>> Array
let heroes = ["Shaktiman", "powerrangers", "thor", "hulk", "spide"];
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}

for(let hero of heroes){
    console.log(hero.toUpperCase);
}


//----------------->>>Question(avg of class marks)
let marks=[85, 97, 44, 37, 76, 60];
let sum=0;
for(let val of marks){
    sum+=val;
}
console.log(sum);
let avg=sum/marks.length;
console.log(`average marks of the class = ${avg}`);


//------------------->>>>Question(change rate after offer dis.)
let items = [250, 645, 300, 900, 50];
for(let i=0; i<items.length; i++){
    let offer = items[i] /10;
    items[i] -= offer;
}
console.log(items);


//------------------>>>> Array Methods
let food=["apple", "chips", "choclate"];

food.push("chai", "moomos"); // push (add from end)
console.log(food);

let deleted = food.pop(); // pop (delete from end)
console.log(food);
console.log("deleted", deleted);

console.log(food);
console.log(food.toString()); // Array to String
console.log(food);

let img_heroes = ["Shaktiman", "powerrangers", "thor", "hulk", "spide"];
let real_heroes = ["armyman", "doctors", "police"];
let heroes = img_heroes.concat(real_heroes);   // concat (merge arrays)
console.log(heroes);

let val = img_heroes.shift();  // shift (delete from starting)
console.log( val);

console.log(img_heroes.slice(1)); // slice (delete, add, exchange)
*/
let arr = [72, 72, 5, 98, 40, 3];
arr.splice(1,2);  // splice
console.log(arr);
arr.splice(1,2,101,303);
console.log(arr);
arr.splice(3, 0, 908);
console.log(arr);