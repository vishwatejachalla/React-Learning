// Session storage
let employeeName = "John";
let age = 35;
let designation = "Manager";
sessionStorage.setItem("name", employeeName);
sessionStorage.setItem("age", JSON.stringify(age));
sessionStorage.setItem("designation", designation);
console.log(sessionStorage.getItem("designation"));

let employee = {
    name: "Rajan",
    age: 35,
    designation: "Teach Lead"
}
sessionStorage.setItem('employee', JSON.stringify(employee));
let empObj = JSON.parse(sessionStorage.getItem('employee'));
console.log(empObj);
/*
sessionStorage.removeItem("employee");
sessionStorage.clear();*/
