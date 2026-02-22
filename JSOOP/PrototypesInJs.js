// constructor functions. JS is a prototype ==> [[Prototype]]: Object
let computer = {cpu: 12};
let lenovo = {screen:"FHD",
    // __proto__:computer
};
let tomhardware ={
    // __proto__:computer, //duplicate __proto__ feilds are not allowed in Objects literlas.
    __proto__:lenovo
}

// console.log(`computer`,tomhardware.__proto__);

let genericCar = {tyres: 4};
let tesla={

    driver : "AI"
}

Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla`,tesla)