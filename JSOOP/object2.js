let obj1 = {
    name : "Rahul",
    age: 23,
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}

// console.log(obj1.hasOwnProperty("name"));
// obj1.greet();

let obj2 ={
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}
// console.log(obj2.hasOwnProperty("name"));
// console.log(obj2.hasOwnProperty("greet"));

obj2.__proto__=obj1;
// obj2.greet();

//class

class person {
    constructor(name,age){
         this.name = name,
         this.age = age
    }
    greet(){
        console.log(`Hi! ${this.name}  Welcome to Javascript in Depth`);
    }
}

let person1 = new person("Rohit",32);
// person1.greet();

class customer extends person {
    constructor(name,age,account,balance){
        super(name,age);
        this.account = account;
        this.balance = balance;
    }
    checkBalence(){
        return this.balance;
    }
}

let c1 = new customer("Mohan",23,5454,3000);
console.log(c1.greet())
