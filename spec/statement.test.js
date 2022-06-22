const Statement = require('../lib/statement')

describe('Statement class', () => {

  let statement;
  beforeEach(function () {
    statement = new Statement()
  })

  it('initializes with an empty transactions array', () => {
    expect(statement.transactions).toEqual([]);
  })

  it('can add a new object to transactions array', () => {
    statement.addTransaction('11/05/23', 500, 1500);
    expect(statement.transactions[0].date).toEqual('11/05/23');
    expect(statement.transactions[0].debit).toEqual(500);
    expect(statement.transactions[0].balance).toEqual(1500);

  })

  it('can return its transactions', () => {
    statement.addTransaction('11/05/23', 500, 1500);
    expect(statement.transactions).toEqual([{balance: 1500, date: "11/05/23", debit: 500}]);
  })

  it('stores transactions in reverse chronological order', () => {
    statement.addTransaction('11/05/23', 750, 750)
    statement.addTransaction('13/05/23', 250, 500)
    expect(statement.transactions[0]).toEqual({balance: 500, date: "13/05/23", debit: 250})
    expect(statement.transactions[1]).toEqual({balance: 750, date: "11/05/23", debit: 750})
  })
  
})