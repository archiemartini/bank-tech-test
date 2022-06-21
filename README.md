# Bank tech test

## Instructions for use

- clone this repository to your local machine
- run `npm install`
- load 'nodetest.js' in node to set up a feature test


### Acceptance criteria

here is the acceptance criteria from bank_tech_test.md 

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

```

From this I discerned 2 nouns to set my classes accordingly:
**Account** - to handle banking logic, dependent on...
**Statement** - to store transactions
I would also add a main class to pen these 2 classes...
**Bank** - I decided to be the "god" file to interact with the two classes above. And was the LAST class I incorporated

## my class interaction

Bank's functions:
- Deposit
- Withdraw
- getBalance() [interacts with DI'd Account]

Account's functions:
- this.balance = 0
- addMoney()
- subtractMoney()
- sendBalance() [to interact with Bank's 'getBalance()']
- getStatement() [to interact with Statement's 'sendStatement()']

Statement's functions:
- this.transactions = []
- addTransaction() [pushs into transactions]
- sendTransactions() [to interact with Account's getStatement()]

