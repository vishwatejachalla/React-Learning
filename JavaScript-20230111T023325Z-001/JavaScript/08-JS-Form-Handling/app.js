let inputElement = document.querySelector("#username");
let h2Element = document.querySelector("#msg");
inputElement.addEventListener("keyup", (event) => {
   h2Element.textContent = event.target.value;
});