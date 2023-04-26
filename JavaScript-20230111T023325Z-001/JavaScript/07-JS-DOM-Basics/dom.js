console.log(window); // browser
console.log(document); // html page / web page

// head , body
console.log(document.head);
console.log(document.body);

// title
console.log(document.title);
document.title = "JavaScript Training";

// h1 element
let h1Element = document.querySelector("h1");
console.log(h1Element);
console.log(h1Element.textContent);

// change h1 element
h1Element.textContent = "Welcome to JavaScript";


// apply styles
let btnElement = document.querySelector('#btn');
btnElement.addEventListener("click", (event) => {
    console.log(event);
    h1Element.style.backgroundColor = "yellow";
    h1Element.style.textAlign = "center";
    h1Element.style.padding = "20px";
    h1Element.style.fontFamily = "Arial, sans-serif";
    h1Element.style.boxShadow = "0 0 10px black";
})

/*
// h2 element
let h2Element = document.querySelector('h2');
console.log(h2Element);
console.log(h2Element.innerHTML);*/
