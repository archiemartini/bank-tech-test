const Account = require('../account')

describe('Account class', () => {

  let account;
  beforeEach(function () {
    account = new Account()
  })

  it('initializes with an empty balance', () => {
    expect(account.balance).toEqual(0)
  })

  it('initializes with an empty statement object', () => {
    expect(account.statement).toEqual({})
  })

  it('can add money to the balance', () => {
    account.addMoney(200)
    expect(account.balance).toEqual(200)
  })

  it('can subtract money from the balance', () => {
    account.addMoney(500)
    account.subtractMoney(200)
    expect(account.balance).toEqual(300)
  })
})