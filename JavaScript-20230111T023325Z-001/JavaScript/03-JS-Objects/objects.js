let mobile = {
    brand : "Apple",
    color : "Silver",
    price : 35000
};
console.log(mobile);
console.log(mobile.brand);
console.log(mobile.isInsured); // undefined
console.log(mobile['brand']);

// dot, []
let propName = "price";
console.log(mobile.propName);
console.log(mobile[propName]);

// nested Objects
let user = {
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
console.log(user.address);
console.log(`Lat : ${user.address.geo.lat} Lng : ${user.address.geo.lng}`);

// de-structuring
let {lat:geoLat,lng:geoLng} = user.address.geo;
console.log(`Lat : ${geoLat} Lng : ${geoLng}`);

// objects iteration : only keys
for(let key of Object.keys(mobile)){
    console.log(`Key : ${key} value : ${mobile[key]}`);
}

for(let value of Object.values(mobile)){
    console.log(value);
}

// JSON.parse() -> JSON object to JavaScript
// JSON.stringify() -> JavaScript object -> JSON Object

let userJSON = JSON.stringify(user);
console.log(userJSON);

let newUser = JSON.parse(userJSON);
console.log(newUser);