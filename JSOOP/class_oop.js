class vehicle {
    constructor(make,model){
        this.make = make,
        this.model = model
    }
    start(){
        console.log(`${this.make} is model of ${this.model}`)
    }
}

class car extends vehicle{
    drive(){
        console.log(`${this.make} is accessible here with ${this.model}`)
    }
}

let myCar = new car("Tata","Siara");
console.log(myCar.start())
console.log(myCar.drive())

let v = vehicle("x","y");
console.log(v.start());  // it will through an error "Class constructor vehicle cannot be invoked without 'new'"