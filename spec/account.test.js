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
})