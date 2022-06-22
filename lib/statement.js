class Statement {

  constructor() {
    this.transactions = [];
  }

  addDepositTransaction(date, debit, newBalance) {
    this.transactions.unshift(`${date} || ${debit} || || ${newBalance}`)
  }

  addWithdrawalTransaction(date, debit, newBalance) {
    this.transactions.unshift(`${date} || || ${debit} || ${newBalance}`)
  }
  printStatement() {
    console.log('date || credit || debit || balance')
    this.transactions.forEach((transaction) => {
      console.log(transaction);
    });
  }
}


module.exports = Statement;