class Statement {

  constructor() {
    this.transactions = [];
  }

  addTransaction(date = {}, debit, newbalance) {
    this.transactions.push({
      date: date,
      debit: debit,
      balance: newbalance
    });
  }
  sendTransactions() {
    return this.transactions;
  }
}

module.exports = Statement;