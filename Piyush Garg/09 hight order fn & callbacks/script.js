// High order function and Callback

function add(a, b, cb) {
    let result = a + b;
    cb(result);

    return() => console.log(result);
}
let resultFunction=add(2, 4, ()=>{});
resultFunction();

add(398, 38, (res) => console.log(res));


