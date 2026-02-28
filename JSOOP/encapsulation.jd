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

