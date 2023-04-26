let mathNumberElement = document.querySelector("#req-number");
let rangeElement = document.querySelector("#multiplier");
let startNumberElement = document.querySelector("#number");
let multiplierElement = document.querySelector("#multi");
let resultElement = document.querySelector("#result");

let calculate = () => {
    let startNumber = Number(startNumberElement.textContent);
    let multiplier = Number(multiplierElement.textContent);
    resultElement.textContent = String(startNumber * multiplier);
};

// keyup event : number box
mathNumberElement.addEventListener('keyup', (event) => {
    let numberEntered = event.target.value;
    if(numberEntered === ""){
        startNumberElement.textContent = "1";
    }
    else{
        startNumberElement.textContent = numberEntered;
    }
    calculate();
});

// input event : range
rangeElement.addEventListener('input', (event) => {
    multiplierElement.textContent = event.target.value;
    calculate();
});

