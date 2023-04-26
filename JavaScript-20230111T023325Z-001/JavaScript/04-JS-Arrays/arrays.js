let technologies = ["html", "javaScript", "JQuery", "React JS"];
console.log(technologies);
console.log(technologies[0]);

// looping : normal for-loop
let result = "";
for(let i =0; i<technologies.length; i++){
    result += ` ${technologies[i]} `;
}
console.log(result);

// looping : for-in loop
result = "";
for(let index in technologies){
    result += ` ${technologies[index]} `;
}
console.log(result);

// looping : for-of loop
result = "";
for(let tech of technologies){
    result += ` ${tech} `;
}
console.log(result);

// looping : forEach function
result = "";
technologies.forEach(function (tech) {
    result += ` ${tech} `;
})
console.log(result);

// looping : forEach  with arrow function
result = "";
technologies.forEach( (tech) => {
    result += ` ${tech} `;
})
console.log(result);

// Array of objects
let employees = [
    {
        id : 'AA01',
        name : "Rajan",
        age : 25,
        designation : "Software Engineer"
    },
    {
        id : 'AA02',
        name : "Mahesh",
        age : 28,
        designation : "Sr.Software Engineer"
    },
    {
        id : 'AA03',
        name : "Rahul",
        age : 30,
        designation : "Tech Lead"
    },
    {
        id : 'AA04',
        name : "Arjun",
        age : 35,
        designation : "Ast. Project Manager"
    },
    {
        id : 'AA05',
        name : "John",
        age : 40,
        designation : "Project Manager"
    }
];
console.log(employees);

// looping
result = "";
for(let employee of employees){
    result += ` ${employee.name} `
}
console.log(result);

// filter : junior employees
let juniorEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

// filter function
let jrEmployees = employees.filter(function (employee) {
    return employee.age <= 30;
})
console.log(jrEmployees);

jrEmployees = employees.filter(employee => employee.age <= 30);
console.log(jrEmployees);

// complex Array
// print names only
result = "";
for(let user of userList){
    result += ` ${user.name.title}. ${user.name.first} ${user.name.last}, `;
}
console.log(result);

// map
let userNames = userList.map(function (user) { return user.dob.age});
console.log(userNames.sort());


