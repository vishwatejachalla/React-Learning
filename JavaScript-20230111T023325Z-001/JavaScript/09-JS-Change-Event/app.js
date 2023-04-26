let selectElement = document.querySelector("#lang-select");
let h2Element = document.querySelector("#lang-option");

selectElement.addEventListener('change', (event) => {
    h2Element.textContent = event.target.value;
});
