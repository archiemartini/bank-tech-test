const Statement = require('./statement')

class Account {
  constructor(statement) {
    this.balance = 0
    this.statement = statement || new Statement()
  }

  addMoney(amount, date = this.getDate()) {
    this.balance += amount
    this.statement.addTransaction(date, amount, this.balance)
  }

  subtractMoney(amount) {
    this.balance -= amount
  }

  getStatement() {
    return this.statement.sendTransactions()
  }

  getDate() {
    let date = new Date()
    let uk_date = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return uk_date
  }

}

module.exports = Account;