let personName = "Bharat";

// console.log(`the length of Person name is : ${personName.length}`)

let heros = ["hulk","spiderman"];
let heroPower ={
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy's power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects.`);
}

Array.prototype.heyHitesh = function(){
    console.log("Hitesh says hiii!!!")
}

// heroPower.hitesh();
// heroPower.getSpiderPower();
// heros.heyHitesh();
// heros.hitesh();


//Inheritance

const user ={
    name: "chai",
    email: "chai@google.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport={
    isAvaiable : false
}

const TASupport ={
    makeAssignment: "Js assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=user;

//Modern syntax

// Object.prototype(TeachingSupport,Teacher)

let anotherUser = "chiaSeeds     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`The true length of string is ${this.trim().length}`)
}

anotherUser.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();