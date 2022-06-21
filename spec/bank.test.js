const Bank = require('../bank')
const Account = require('../account')

describe('Bank class', () => {
  
  let account;
  beforeEach(function () {
    account = new Account();
  });

  let bank;
  beforeEach(function () {
    bank = new Bank(account);
  });

  it('can make a deposit', () => {
    bank.deposit(200);
    expect(bank.getBalance()).toEqual('£200');
  });

  it('can make a withdrawal', () => {
    bank.deposit(500);
    bank.withdraw(200);
    expect(bank.getBalance()).toEqual('£300');
  });

  it('can print a bank statement', () => {
    expect(bank.printStatement()).toEqual(console.log('date || credit || debit || balance'));
  });

})