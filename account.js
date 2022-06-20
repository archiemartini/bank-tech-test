class Account {
  constructor() {
    this.balance = 0
    this.statement = {}
  }

  addMoney(amount) {
    this.balance += amount
  }

  subtractMoney(amount) {
    this.balance -= amount
  }
}

module.exports = Account;