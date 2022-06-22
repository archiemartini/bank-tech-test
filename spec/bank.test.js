
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

  it('can print a bank statement', () => {
    expect(bank.getStatement()).toEqual(console.log('date || credit || debit || balance'));
  });

})