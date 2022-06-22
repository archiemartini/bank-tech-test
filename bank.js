const DateClass = require('./dateclass')
const Account = require('./account')

class Bank {

  constructor(account, date) {
    this.account = account || new Account()
    this.date = date || new DateClass()
  }

  getBalance() {
    return this.account.sendBalance();
  };

  deposit(amount, date = this.date.getDate()) {
    this.account.addMoney(amount.toFixed(2), date);
  };

  withdraw(amount, date = this.date.getDate()) {
    this.account.subtractMoney(amount.toFixed(2), date);
  };
  
  printStatement() {
    console.log('date || credit || debit || balance')
    this.account.getStatement().forEach((object) => {
      console.log(`${object.date} || ${object.debit} || ${object.balance}`);
    });
  };
  
}

module.exports = Bank;