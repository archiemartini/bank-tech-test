const Statement = require('./statement')

class Account {
  constructor(statement) {
    this.balance = 0;
    this.statement = statement || new Statement();
  }

  addMoney(amount, date) {
    this.balance += amount
    this.statement.addTransaction(date, amount, this.balance);
  }

  subtractMoney(amount, date) {
    this.balance -= amount;
    this.statement.addTransaction(date, amount, this.balance);
  }

  sendBalance() {
    return `£${this.balance}`;
  }

  getStatement() {
    return this.statement.sendTransactions().reverse();
  }

}

module.exports = Account;