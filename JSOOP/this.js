"use strict";

// this in global space

// console.log(this)  // in browser global object - window,gloal

// this inside a function

function x(){
    // the value of this here will depend on strict or non-strict mode
    // console.log(this);
}

// this in strict mode - (this substitution)
//   ```
//  " if the value of this keyword is undefined or null then this will be replaced with globalObject "
//    Only in non strict mode.
//   ```
   
// this value depends on how this is called (window)

x();
  // window.x(); // only for browser context.
// console.log(globalThis)

// this inside a object's method

const obj = {
    a: 10,
    x : function(){
        console.log(this);
    }
}

// obj.x();
// call apply bind methods (sharing methods)

const student ={
    name: "Bharat",
    printName: function(){
        console.log(this.name);
    }
}

student.printName();

const student2 ={
    name:"Molina"
}

student.printName.call(student2);
// this inside arrow function


const obj1 = {
    a : 10,
    x: () =>{
        console.log(this);
    }
}
obj1.x();
// this inside nested arrow function
const obj2 = {
    a : 10,
    x: function(){

       const y = ()=>{
        console.log(this);
    }
        y();
    },
    z: function(){
        console.log(this);
    }
    
}
obj2.x();
obj2.z();
// this inside DOMf