const greet = (name: string, age: number): string => {
    return `Hello Mr. ${name} You are ${age} yrs old!`;
};
let result: string = greet("John", 40);
console.log(result);