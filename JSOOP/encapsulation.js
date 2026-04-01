// class BankAccount {
//   #balance;  // private field

//   constructor(owner, initialBalance) {
//     this.owner = owner;
//     this.#balance = initialBalance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount("John", 1000);

// account.deposit(500);
// account.withdraw(200);

// console.log(account.getBalance()); // 1300
// console.log(account.#balance); ❌ Error (private)

//*** 
// Encapsulation Using Closures (Before ES6)
//*** 
function BankAccount(owner, initialBalance) {
  let balance = initialBalance; // private variable

  this.owner = owner;

  this.deposit = function(amount) {
    if (amount > 0) {
      balance += amount;
    }
  };

  this.withdraw = function(amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
    }
  };

  this.getBalance = function() {
    return balance;
  };
}

const account = new BankAccount("Alice", 500);

account.deposit(200);
console.log(account.getBalance()); // 700
// console.log(account.balance); ❌ Undefined

// Simple SWOT Analysis Program

let strengths = prompt("Enter your Strengths (comma separated):");
let weaknesses = prompt("Enter your Weaknesses (comma separated):");
let opportunities = prompt("Enter your Opportunities (comma separated):");
let threats = prompt("Enter your Threats (comma separated):");

console.log("----- YOUR SWOT ANALYSIS -----");
console.log("Strengths: " + strengths);
console.log("Weaknesses: " + weaknesses);
console.log("Opportunities: " + opportunities);
console.log("Threats: " + threats);
// april's fool code push