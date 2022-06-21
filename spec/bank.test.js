const Bank = require('../bank')
const Account = require('../account')

describe('Bank class', () => {
  let account = new Account()

  let bank;
  beforeEach(function () {
    bank = new Bank(account)
  });

  it('can make a deposit', () => {
    bank.deposit(200)
    expect(bank.getBalance()).toEqual('£200')
  })

  it('can make a withdrawal', () => {
    bank.deposit(500)
    bank.withdraw(200)
    expect(bank.getBalance()).toEqual
  })

  it('can get a uk format date', () => {
    expect(bank.getDate()).toMatch(/^(0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20)\d\d$/)
  })

})