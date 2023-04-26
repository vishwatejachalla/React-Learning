let marks: number = 65;
let result: string = "";
if (marks <= 35) {
    result = "FAILED";
} else {
    result = "PASS";
}
console.log(result);

// for-loop
result = "";
let startNumber: number = 0;
let endNumber: number = 100;
for (let i: number = startNumber; i <= endNumber; i++) {
    result += `${i} `;
}
console.log(result);