//----------------------->>> logical operators

// AND { && }
// all conditon should be true
const age = 18;
const gender = 'male';

if(age>=18 && gender == 'male'){
    console.log('You are an adult male');
}

// OR { || }
// atleast one cond. should be true
const agge = 18;
const genderr = 'male';

if(agge>=17 || genderr == 'male'){
    console.log('You are an adult male');
}

// NOT { ! }
// true into false and false into true
const number = 5;

if(!(number % 2 == 0)) {
    console.log('Yes');
}