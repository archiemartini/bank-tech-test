const Statement = require('../lib/statement')

const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

describe('Statement class', () => {

  let statement;
  beforeEach(function () {
    statement = new Statement()

    consoleSpy.mockClear()
  })

  it('initializes with an empty transactions array', () => {
    expect(statement.transactions).toEqual([]);
  })

  it('can add a new transaction string to the array', () => {
    statement.addDepositTransaction('11/05/23', 500, 1500);
    expect(statement.transactions).toEqual(["11/05/23 || 500 || || 1500"]);
  })

  it('stores transactions in reverse chronological order', () => {
    statement.addDepositTransaction('11/05/23', 750, 750)
    statement.addWithdrawalTransaction('13/05/23', 250, 500)
    expect(statement.transactions[0]).toEqual("13/05/23 || || 250 || 500")
    expect(statement.transactions[1]).toEqual("11/05/23 || 750 || || 750")
  })

  it('console.logs the transactions as expected, and in correct order according to the calls index', () => {
    statement.addDepositTransaction('11/05/23', 750, 750)
    statement.addWithdrawalTransaction('13/05/23', 250, 500)
    statement.printStatement()

    expect(console.log).toBeCalledTimes(3)
    expect(console.log.mock.calls[0][0]).toEqual('date || credit || debit || balance')
    expect(console.log.mock.calls[1][0]).toEqual("13/05/23 || || 250 || 500")
    expect(console.log.mock.calls[2][0]).toEqual("11/05/23 || 750 || || 750")
  })
})