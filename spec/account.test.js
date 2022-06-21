const Account = require('../account')
const Statement = require('../statement')

jest.mock('../statement')

describe('Account class', () => {

  beforeEach(() => {
    Statement.mockClear()
  })


  it('initializes with an empty balance', () => {
    account = new Account()
    expect(account.balance).toEqual(0)
  })

  it('can add money to the balance', () => {
    account = new Account()
    account.addMoney(200)
    expect(account.balance).toEqual(200)
  })

  it('can subtract money from the balance', () => {
    account = new Account
    account.addMoney(500)
    account.subtractMoney(200)
    expect(account.balance).toEqual(300)
  })

  it('can get a statement', () => {
    const mockStatement = new Statement()
    mockStatement.sendTransactions.mockImplementation(() => [{date: '11/5/2022', debit: 500, balance: 1500}])
    account = new Account(mockStatement)
    
    expect(account.getStatement()).toEqual([{date: '11/5/2022', debit: 500, balance: 1500}])
  })

  it('can get a uk format date', () => {
    account = new Account()
    expect(account.getDate()).toMatch(/^(0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20)\d\d$/)
  })
})