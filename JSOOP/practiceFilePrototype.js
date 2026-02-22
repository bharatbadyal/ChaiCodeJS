function user (name){
    this.name = name;
}

user.prototype.sayhi = function(){
    console.log(`Hi!`, this.name)
}

const U1 = new user("Zhyan")

console.log(`U1 = ${U1.name}`)

console.log(U1.__proto__ === user.prototype) // true
console.log(user.__proto__ === Function.prototype) // true