// local storage
let employeeName = "John";
let age = 35;
let designation = "Manager";
localStorage.setItem("name", employeeName);
localStorage.setItem("age", JSON.stringify(age));
localStorage.setItem("designation", designation);
console.log(localStorage.getItem("designation"));

let employee = {
    name: "Rajan",
    age: 35,
    designation: "Teach Lead"
}
localStorage.setItem('employee', JSON.stringify(employee));
let empObj = JSON.parse(localStorage.getItem('employee'));
console.log(empObj);
localStorage.removeItem("employee");
localStorage.clear();