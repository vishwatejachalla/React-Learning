// normal function
function greet(name){
    console.log(`Welcome to Greet Function : ${name}`);
}
greet("Naveen");

// function expression
let greetFE = function (name){
    console.log(`Welcome to GreetFE Function : ${name}`);
}
greetFE('Naveen');

// arrow function
let greetAF = (name) => {
    console.log(`Welcome to GreetAF Function : ${name}`);
}
greetAF('Naveen');

// print numbers
let printNumbers = (startNumber,endNumber,incrNumber) => {
    if(startNumber <= endNumber){
        let result = "";
        for(let i=startNumber; i<=endNumber; i += incrNumber){
            result += ` ${i} `;
        }
        console.log(result);
    }
    else{
        console.log(`StartNumber should be less than end number`);
    }
};
printNumbers(10,1000, 50);
printNumbers(20,1000, 20);
printNumbers(10,1000, 10);

//

let sum = (a , b) => {
    return a + b;
};
let sub = (a , b) => {
    return a - b;
};
let mul = (a , b) => {
    return a * b;
};
let div = (a , b) => {
    return a / b;
};

let num1 = 10;
let num2 = 20;
let calculateSum = sum(num1 , num2);
let calculateSub = sub(num2 , num1);
let calculateMul = mul(num2 , num1);
let calculateDiv = div(num2 , num1);
let finalResult = calculateSum + calculateSub + calculateMul + calculateDiv;
console.log(finalResult);












