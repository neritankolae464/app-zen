/* 
   Filename: ComplexCode.js
   Content: A complex code demonstrating a simulation of a bank with multiple accounts and transactions.
*/

class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
    this.transactions = [];
  }

  createAccount(owner, initialBalance) {
    const account = new Account(this.generateAccountNumber(), owner, initialBalance);
    this.accounts.push(account);
    return account;
  }

  findAccount(accountNumber) {
    return this.accounts.find(account => account.accountNumber === accountNumber);
  }

  generateAccountNumber() {
    return `ACC${Math.floor(Math.random() * 1000000)}`;
  }

  makeDeposit(accountNumber, amount) {
    const account = this.findAccount(accountNumber);
    const depositTransaction = new Transaction('deposit', amount);
    account.balance += amount;
    account.transactions.push(depositTransaction);
    this.transactions.push(depositTransaction);
  }

  makeWithdrawal(accountNumber, amount) {
    const account = this.findAccount(accountNumber);
    if (account.balance < amount) {
      throw new Error('Insufficient funds');
    }
    const withdrawalTransaction = new Transaction('withdrawal', amount);
    account.balance -= amount;
    account.transactions.push(withdrawalTransaction);
    this.transactions.push(withdrawalTransaction);
  }

  displayAccounts() {
    console.log(`Bank Accounts (${this.name}):`);
    for (const account of this.accounts) {
      console.log(`Account Number: ${account.accountNumber}`);
      console.log(`Owner: ${account.owner}`);
      console.log(`Balance: ${account.balance}`);
      console.log(`Transactions:`);
      for (const transaction of account.transactions) {
        console.log(`- Type: ${transaction.type}, Amount: ${transaction.amount}`);
      }
      console.log('-----------------------');
    }
  }
}

class Account {
  constructor(accountNumber, owner, initialBalance) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
    this.transactions = [];
  }
}

class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
    this.timestamp = new Date();
  }
}

// Usage example:
const myBank = new Bank('MyBank');
const account1 = myBank.createAccount('John Doe', 500);
myBank.makeDeposit(account1.accountNumber, 200);
myBank.makeWithdrawal(account1.accountNumber, 100);
const account2 = myBank.createAccount('Jane Smith', 1000);
myBank.makeDeposit(account2.accountNumber, 500);
myBank.displayAccounts();