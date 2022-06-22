
const BankAccount = require('../lib/bank')
const Statement = require('../lib/statement')

describe('Bank class', () => {
  
  let statement;
  beforeEach(function () {
    statement = new Statement();
  });

  let bank;
  beforeEach(function () {
    bank = new BankAccount(statement);
  });

  it('can make a deposit', () => {
    bank.deposit(200);
    expect(bank.getBalance()).toEqual('£200.00');
  });

  it('can make a withdrawal', () => {
    bank.deposit(500);
    bank.withdraw(200);
    expect(bank.getBalance()).toEqual('£300.00');
  });

  it('can print a bank statement that contains the transactions in reverse chronological order', () => {
    bank.deposit(500, '11/05/2022')
    bank.deposit(250, '13/05/2022')
    expect(bank.getStatement()).toEqual(console.log('date || credit || debit || balance'))
                                        
  });

})