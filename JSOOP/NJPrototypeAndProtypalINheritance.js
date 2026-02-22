let object = {
    name : "Rahul",
    city : "Kathua",
    getIntro: function(){
        console.log(`${this.name} from ${this.city}`)
    }
}

// console.log(object);

let object2 ={
    name: "Aditya"
}

object2.__proto__ = object;

console.log(object2.__proto__);
console.log(object2.city)
console.log(object.getIntro())
console.log(object2.getIntro())