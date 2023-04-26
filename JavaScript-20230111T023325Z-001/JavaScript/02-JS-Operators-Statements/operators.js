/*
    1. arithmetic Operators + - / * %
    2. short hand math += , -= , *= /=
    3. incr / decr : ++ , --
    4. conditional operators : < > <= >= !==
    5. logical operators : || , &&
    6. ternary operator : ?:
    7. equality operator
 */

// 1. arithmetic Operators + - / * %
let num1 = 10;
let num2 = 20;
console.log(`sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`mul : ${num1 * num2}`);
console.log(`div : ${num1 / num2}`);

// 2. short hand math += , -= , *= /=
let a = 10;
let b = 20;
let count = 10;
//count = count / (a + b); // count /= (a + b)
count /= (a + b);
console.log(`count : ${count}`);

// 3. incr / decr : ++ , --
let x = 10;
x = ++x; // x = x + 1
x = x + 1;
x += 1;
console.log(`x : ${x}`);

//  4. conditional operators : < > <= >= !==
let marks = 35;
let result = "";
if(marks < 35){
    result = "FAILED";
}
else{
    result = "PASS";
}
console.log(result);

// 5. logical operators : || , &&
// T && T -> T
// F || F -> F

let isPrepared = true;
let isPerformed = true;
if(isPrepared && isPerformed){
    result = "SUCCESS";
}
else{
    result = "TRY AGAIN";
}
console.log(result);

//  6. ternary operator : ?:
// (condition) ? true : false;
(isPrepared && isPerformed) ?  result = "SUCCESS" : result = "TRY AGAIN";
console.log(result);

// 7. equality operator == , ===
let y = 10;
let z = "10";
console.log(`is Equal ? : ${y === z}`);



