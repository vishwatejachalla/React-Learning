// callback
// function pass it as a parameter to another function
/*
let customers = [{id : 1, name : "rajan"}, {id: 2, name: "John"}];

let addNewCustomer = (customer,callback) => {
    setTimeout(() => {
        console.log('adding the customer');
        customers.push(customer);
        callback();
    }, 2000)
};

let displayCustomers = () => {
    console.table(customers);
};

addNewCustomer({id : 3, name : "Mahesh"}, displayCustomers);*/

let getMilk = (boilMilk,addSugar) => {
    setTimeout(() => {
        console.log("1. Get milk from Shop");
        boilMilk(addSugar);
    }, 1000);
};

let boilMilk = (addSugar) => {
    setTimeout(() => {
        console.log("2. Boil milk");
        addSugar();
    }, 2000);
};

let addSugar = () => {
    setTimeout(() => {
        console.log("3. add sugar & coffee, coffee is ready");
    }, 500);
};

let makeCoffee = () => {
    getMilk(boilMilk,addSugar);
};
makeCoffee();


