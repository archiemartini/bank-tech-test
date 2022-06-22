class Statement {

  constructor() {
    this.transactions = [];
  }

  addTransaction(date, debit, newbalance) {
    this.transactions.push({
      date: date,
      debit: debit,
      balance: newbalance
    });
  }
  printStatement() {
    console.log('date || credit || debit || balance')
    this.transactions.reverse().forEach((object) => {
      console.log(`${object.date} || ${object.debit} || ${object.balance}`);
    });
  }
}


module.exports = Statement;