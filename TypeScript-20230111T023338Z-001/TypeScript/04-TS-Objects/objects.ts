interface Student {
    name: string;
    age: number;
    college: string;
}

let student: Student = {
    name: "Rajan",
    age: 21,
    college: "CBIT"
};
console.log(student);

// customer
interface CustomerAddress {
    street: string;
    city: string;
    state: string;
    pinCode: number;
    country: string;
}

interface ICustomer {
    name: string;
    age: number;
    designation: string;
    address: CustomerAddress
}

let customer: ICustomer = {
    name: "Jon",
    age: 40,
    designation: "Software Developer",
    address: {
        street: "ABC Steet",
        city: "Hyderabad",
        country: "India",
        state: "TS",
        pinCode: 24234234
    }
};
console.log(customer);

//

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

let user: IUser = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
};
console.log(user);

// only ids
let keysArray: string[] = [];

for (let key of Object.keys(user)) {
    keysArray.push(key);
}
console.log(keysArray);

















