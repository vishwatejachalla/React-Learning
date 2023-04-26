/*
   1. if-else
   2. switch
   3. for-loop
   4. while
   5. do-while
 */

// if-else
let currentTime = 3;
let greetMessage = "";
if(currentTime >= 0 && currentTime <= 12){
    greetMessage = "Good Morning";
}
else if(currentTime > 12 && currentTime <= 17){
    greetMessage = "Good Afternoon";
}
else if(currentTime > 17 && currentTime <= 23){
    greetMessage = "Good Evening";
}
else{
    greetMessage = "Invalid time";
}
console.log(greetMessage);

// switch

const expr = 'Oranges';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

// for loop
/*
    for(initialization; condition; incr/decr){
        // statements
    }

    initialization;
    while(condition){
        statements;
        incr / decr (last statement)
    }

    initialization;
    do{
        statements;
        incr / decr (last statement)
    }
    while(condition);
 */

// print number from 1 to 10
let result = "";
for(let i = 0; i <= 10; i++){
    if(i <= 9){
        result += ` ${i} , `;
    }
    else{
        result += ` ${i}`;
    }
}
console.log(result);

// using while
result = "";
let initialValue = 0;
while(initialValue <= 10){
    if(initialValue <= 9){
        result += ` ${initialValue} , `;
    }
    else{
        result += ` ${initialValue}`;
    }
    initialValue++;
}
console.log(result);

// print numbers from 20 to 0 diff 2
result = "";
for(let i = 20; i >= 0; i -= 2){
    result += ` ${i} `;
}
console.log(result);

// while
result = "";
initialValue = 20;
while(initialValue >= 0){
    result += ` ${initialValue} `;
    initialValue -= 2
}
console.log(result);

/*
    *
    *  *
    *  *  *
    *  *  *  *
    *  *  *  *  *
 */
result = "";
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i ; j++){
        result += ` * `;
    }
    result += `\n\n`;
}
console.log(result);

/*
    1
    12
    123
    1234
    12345
 */

/*
    1
    22
    333
    4444
    55555
 */

/*
    12345
    1234
    123
    12
    1
 */


/*
    55555
    4444
    333
    22
    1
 */

/*
    54321
    5432
    543
    54
    5
 */








