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
  
})