let name = "Abhay";
console.log(name);
console.log(name.length);
console.log(name[0]);
console.log(name[1]);
console.log(name[2] = "x")// this can not done because strings are immutable 


// template literals
let boy1 = "Promod";
let boy2 = "Atul";
// atul is friend of promod
let sentence = `${boy2} is friend of ${boy1}`;
console.log(sentence)

// Escape sequenece characters
let fruit = 'bana\'na'
console.log(fruit)
let fruit2 = "bana\"na"
console.log(fruit2)
console.log(fruit2.length)


console.log(name.toUpperCase())
console.log(name.toLowerCase())

console.log(name.slice(2,4))
console.log(name.slice(2))
let str1 = "Please give me Rs 1000";
let amount = Number.parseInt(str1.slice("Please give me Rs ".length))
console.log(amount)
console.log(typeof amount)


console.log(name.replace("Abh","Ash"))
console.log(name.replace("abh","Ash"))

let phone = "      Samsung     ";
console.log(phone)
console.log(phone.trim());

//concatination
let caste = "Chauhan";
console.log(name.concat(" " + caste))
console.log(name.concat(" belongs to ",  caste , " caste"));


for(let i=0; i<=name.length; i++){
    console.log(name[i]);
}


