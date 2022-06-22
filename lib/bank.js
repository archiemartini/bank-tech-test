const DateClass = require('./dateclass')
const Statement = require('./statement')

class BankAccount {

  constructor(statement, date) {
    this.balance = 0
    this.date = date || new DateClass()
    this.statement = statement || new Statement()
  }

  getBalance() {
    return `£${this.balance.toFixed(2)}`;
  }

  deposit(amount, date = this.date.getDate()) {
    this.balance += amount
    this.statement.addDepositTransaction(date, amount.toFixed(2), this.balance.toFixed(2));
  }

  withdraw(amount, date = this.date.getDate()) {
    this.balance -= amount;
    this.statement.addWithdrawalTransaction(date, amount.toFixed(2), this.balance.toFixed(2))
  }
  
  getStatement() {
    return this.statement.printStatement()
  }
  
}

module.exports = BankAccount;