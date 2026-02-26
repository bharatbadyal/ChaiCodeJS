let car ={
    make: "Toyota",
    model: "Camery",
    year: 2020,
    start: function(){
        return`${this.model} ${this.make} started in production in ${this.year}`
    }
}

//  console.log(car.start());

function person(name,age){
    this.name = name,
    this.age = age
}

let person1 = new person("John",29)
// console.log(person1)

function Animal(type){
    this.type = type
}

Animal.prototype.sound = function(){
    return`${this.type} make sound `;
}

Array.prototype.hitesh =function(){
    console.log(`Custom Method ${this}`)
}


let myArr = [1,2,3,4,5];
// console.log(myArr.hitesh())

// let obj1 = {
//     name : this.name,
//     style: this.style
// }
function obj1(name,style){
    this.name = name,
    this.style = style
}

obj1.prototype.values = function(){
    console.log(`${this.name},${this.style}`)
}

obj1.values("x","y");