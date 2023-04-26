let todos = [];

let formElement = document.querySelector("#todo-form");
let todoInputElement = document.querySelector("#todo-input");
formElement.addEventListener('submit', (event) => {
    alert("from click");
    let todo = todoInputElement.value;
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
});

let displayTodos = () => {
    let todoList = JSON.parse(localStorage.getItem('todos'));
    let listGroupElement = document.querySelector("#list-group");
    let listGroupItem = "";
    for (let todo of todoList) {
        listGroupItem += ` <li class="list-group-item">
                                ${todo}
                            </li>`
    }
    listGroupElement.innerHTML = listGroupItem;

};