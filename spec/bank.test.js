
const BankAccount = require('../lib/bank')
const Statement = require('../lib/statement')

jest.mock('../lib/statement')

describe('Bank class', () => {

  
  beforeEach(function () {
    mockStatement = new Statement();
    bank = new BankAccount(mockStatement);

    
    Statement.mockClear()
  });

  
  it('can make a deposit', () => {
    mockStatement.addDepositTransaction = jest.fn()
    bank.deposit(200);
    expect(bank.getBalance()).toEqual('£200.00');
    expect(mockStatement.addDepositTransaction).toHaveBeenCalledTimes(1)
  });

  it('can make a withdrawal', () => {
    bank.deposit(500,'11/05/2022');
    bank.withdraw(200, '12/05/2022');

    expect(mockStatement.addDepositTransaction).toHaveBeenCalledTimes(1)
    expect(mockStatement.addWithdrawalTransaction).toHaveBeenCalledTimes(1)
    expect(mockStatement.addWithdrawalTransaction).toHaveBeenCalledWith('12/05/2022', '200.00', '300.00')
    expect(bank.getBalance()).toEqual('£300.00');
  });

  it('can print a bank statement that contains the transactions in reverse chronological order', () => {
    bank.getStatement()

    expect(mockStatement.printStatement).toHaveBeenCalledTimes(1)
                                        
  });

})