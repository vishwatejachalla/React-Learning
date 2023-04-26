// promise concept with callbacks
let cleanMobile = (success, failure) => {
    let cleaningFinished = false;
    if (cleaningFinished) {
        success("Cleaning is finished!");
    } else {
        failure("Failed in Cleaning");
    }
};
cleanMobile((message) => {
    console.log(message);
}, (message) => {
    console.log(message);
});

// actual promise in javascript
let doTask = new Promise((resolve, reject) => {
    let taskFinished = false;
    if (taskFinished) {
        resolve("Task is finished");
    } else {
        reject("Failed to finished the task");
    }
});
doTask.then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.log(msg);
});

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

let makeCoffee = () => {
    getMilk().then((response) => {
        console.log(response);
        boilMilk().then((response) => {
            console.log(response);
            addSugar().then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        }).catch((error) => {
            console.log(error);
        })
    }).catch((error) => {
        console.log(error);
    })
}
makeCoffee();













