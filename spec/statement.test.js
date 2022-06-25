const Statement = require('../lib/statement')

global.console.log = jest.fn()

describe('Statement class', () => {

  let statement;
  beforeEach(function () {
    statement = new Statement()
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

  it('console.logs the transactions as expected', () => {
    statement.addDepositTransaction('11/05/23', 750, 750)
    statement.addWithdrawalTransaction('13/05/23', 250, 500)
    statement.printStatement()
    expect(console.log).toBeCalledTimes(3)
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance')
    expect(console.log).toHaveBeenCalledWith("13/05/23 || || 250 || 500")
    expect(console.log).toHaveBeenCalledWith("11/05/23 || 750 || || 750")
  })
  
})