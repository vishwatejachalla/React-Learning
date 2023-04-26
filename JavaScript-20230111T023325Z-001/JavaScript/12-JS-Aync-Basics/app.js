/*
let count = 1;
console.log(new Date().toLocaleTimeString())
let greet = () => {
    console.log(`Iam from greet : ${count}`);
    count++;
    console.log(new Date().toLocaleTimeString())
};
let interval = setInterval(() => {
    greet();
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 5000)
*/

/*console.log("person 1");
console.log("person 2");
setTimeout(() => {
    console.log("person 3"); // getting customer data from server
}, 2000)
console.log("person 4"); // display customer data []
console.log("person 5");*/

/*
    1. Get milk from Shop
    2. Boil milk
    3. add sugar & coffee, coffee is ready
 */
let getMilk = () => {
    setTimeout(() => {
        console.log("1. Get milk from Shop");
    }, 1000);
};

let boilMilk = () => {
    setTimeout(() => {
        console.log("2. Boil milk");
    }, 2000);
};

let addSugar = () => {
    setTimeout(() => {
        console.log("3. add sugar & coffee, coffee is ready");
    }, 500);
};

let makeCoffee = () => {
    getMilk();
    boilMilk();
    addSugar();
};
makeCoffee();












