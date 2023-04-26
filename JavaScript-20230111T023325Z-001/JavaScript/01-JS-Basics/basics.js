// log messages
console.log("Iam a log message");
console.info("Iam an Information message");
console.warn("Iam an Warning message");
console.error("Iam an Error message");
console.table({name : "John", age : 25, designation : "Software Engineer"});

// variable declaration
/*
    1. camelCase :
    2. no start with numbers
    3. no special chars except $ _
    4. use back-tick operators (`)
 */

let employeeName = "John";
console.log("Employee Name : " + employeeName + " Type Of : " + typeof employeeName); // outdated
console.log(`Employee Name : ${employeeName} Type of : ${typeof  employeeName}`);

// data types of JavaScript
// string, number , boolean , array , object , null , undefined

let studentName = "Arjun"; // string
console.log(`Student Name : ${studentName}`);

// number
let studentAge = 21;
console.log(`Student Age : ${studentAge}`);

// boolean
let isPlaced = true;
console.log(`Is Placed : ${isPlaced}`);

// object
let student = {
    name : "Arjun",
    age : 21,
    college : "CBIT"
};
console.log(student);
console.log(student.name);

// array
let colors = ["White", "Black", "Purple"];
console.log(colors);
console.log(colors[0]);

// null (dummy value)
let test = null;
console.log(null);

// undefined
let abc;
console.log(abc);








