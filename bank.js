class Bank {

  constructor(account) {
    this.account = account
  }

  getBalance() {
    return this.account.sendBalance()
  }

  deposit(amount, date = this.getDate()) {
    this.account.addMoney(amount, date)
  }

  withdraw(amount, date = this.getDate()) {
    this.account.subtractMoney(amount, date)
  }
  

  
  getDate() {
    let date = new Date()
    let uk_date = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return uk_date
  }

}

module.exports = Bank;