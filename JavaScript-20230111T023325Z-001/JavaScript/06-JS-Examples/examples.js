// strings
let message = "Good Morning";

console.log(`Length : ${message.length}`);
console.log(`lowercase : ${message.toLowerCase()}`)
console.log(`uppercase : ${message.toUpperCase()}`)
console.log(`trim : ${message.trim().length}`);
console.log(`substring : ${message.substring(0,3)}`)
console.log(message.split(""))
console.log(message.split("").reverse().join(""));

// Triangle Strings
/*
    ABCD  -> substring(0,4)
    ABC  -> substring(0,3)
    AB -> substring(0,2)
    A -> substring(0,1)
 */
let name = "NAVEEN SAGGAM";
let triangleStringOne = (name) => {
    let result = "";
    for(let i= name.length; i >= 1; i--){
        result += `${name.substring(0, i)} \n`;
    }
    console.log(result);
};
triangleStringOne(name);

/*
    ABCD -> substring(0);
     BCD -> substring(1);
      CD -> substring(2);
       D -> substring(3);
 */
let addSpace = (num) => {
    let space = "";
    for(let i=1; i<=num; i++){
        space += ` `;
    }
    return space;
};
let triangleStringTwo = (name) => {
    let result = "";
    for(let i= 0; i < name.length; i++){
        result += `${addSpace(i)}${name.substring(i)} \n`;
    }
    console.log(result);
};
triangleStringTwo(name);

/*
    A
    AB
    ABC
    ABCD

 */

/*
        D
       CD
      BCD
     ABCD
 */

/*
    DCBA
    DCB
    DC
    D
 */