// string
let employeeName:string = "John";
console.log(`Employee Name : ${employeeName}`);

// number
let salary:number = 50000;
console.log(`salary : ${salary}`);

// boolean
let isDeveloper:boolean = true;
console.log(`isDeveloper : ${isDeveloper}`);

// object
interface Mobile{
    brand : string;
    color : string;
    price : number;
}

let mobile:Mobile = {
    brand : "Apple",
    color : "Black",
    price : 35000
}
console.log(mobile);
console.log(mobile.brand);

// array
let techs:string[] = ["HTML", "CSS", "Javascript"];
console.log(techs);

// any -> rarely-used
let a:any = "test";
a = 100;
a = true;










