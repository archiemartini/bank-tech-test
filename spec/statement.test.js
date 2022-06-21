const Statement = require('../statement')

describe('Statement class', () => {

  let statement;
  beforeEach(function () {
    statement = new Statement()
  })

  it('initializes with an empty transactions array', () => {
    expect(statement.transactions).toEqual([])
  })

  it('can add a new object to transactions array', () => {
    statement.addTransaction('11/05/23', 500, 1500)
    expect(statement.transactions[0].date).toEqual('11/05/23')
    expect(statement.transactions[0].debit).toEqual(500)
    expect(statement.transactions[0].balance).toEqual(1500)

  })
  
})