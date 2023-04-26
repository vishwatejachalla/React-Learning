// Make  Coffee
let getMilk = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // getting milk from shop
            let result = true;
            if (result) {
                resolve("1. Get milk from Shop : Success");
            } else {
                reject("1. Get milk from Shop : Failed");
            }
        }, 1000);
    });
};


let boilMilk = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // getting milk from shop
            let result = true;
            if (result) {
                resolve("2. Boil milk : Success");
            } else {
                reject("2. Boil milk : Failed");
            }
        }, 2000);
    });
};

let addSugar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // getting milk from shop
            let result = true;
            if (result) {
                resolve("3. add sugar & coffee, coffee is ready");
            } else {
                reject("3. add sugar & coffee,: Failed");
            }
        }, 500);
    });
};

let makeCoffee = async () => {
    try {
        let result = await getMilk();
        console.log(result);
        result = await boilMilk();
        console.log(result);
        result = await addSugar();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
makeCoffee();