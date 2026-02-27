function Car (name, model){
    this.name = name,
    this.model = model
}

let myCar = new Car("Tata","Nexon");
console.log(`My Car is ${myCar}`)  //this will give [object Object] output because of type conversion
console.log(`My Car is ${myCar.model} by ${myCar.name}.`);
console.log(myCar);


function Tea (type){
     this.type= type,
     this.describe = function(){
        return `This is a cup of ${this.type}`
     }
}

let myTea = new Tea("Macha");
console.log(myTea.describe())

function Animal(species){
    this.species = species
}

Animal.prototype.sound =function(){
    return `${this.species} makes a sound`
}

console.log(Animal.prototype)

const dog = new Animal("Dog")

console.log(dog.hasOwnProperty("sound")) // false
console.log(dog.__proto__.hasOwnProperty("sound")) // true