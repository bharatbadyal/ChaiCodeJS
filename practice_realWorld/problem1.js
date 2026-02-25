let user ={
    login (){
        console.log(`${this.name} logged in`)
    },
    logout(){
        console.log(`${this.name} logout`)
    }
}

const admin = Object.create(user);

admin.name = "Amit";
admin.role = "Admin";

admin.deleteUser = function(userName){
    console.log(`${this.name} deleted ${userName}`)
};

admin.login();
admin.deleteUser("Ravi");
admin.logout(); 

// JavaScript searches like this:

// 1.Does admin have login? ❌
// 2.Check its prototype (user) → YES ✅
// 3.Execute it with this = admin
// This is prototypal chaining.

// admin → user → Object.prototype → null