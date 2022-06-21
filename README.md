# bank tech test

## instructions for use

- clone this repository to your local machine
- run `npm install`
- load 'nodetest.js' in node to set up a feature test
- test with `jest`

The programme allows you to deposit/withdraw from the bank class. For testing purposes you can enter a date in this format 'dd/mm/yyyy', as a second argument after the deposit/withdrawal amount. Otherwise the argument will default and call the date today.

## in action

![walkthrough](./readme-screenshot.png)

### acceptance criteria

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
**DateClass** - a last minute refactor into its own class, too nervous to call it just Date and mess with the base class that comes with Javascript

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

## process
My process led me to 3 classes all in all. And the program seems pretty clean Some things I'm dubious about include:
- Should my statement printing be done on the main bank class?
- Could my getDate() be elsewhere? In another class even?
- I think that the date, though you can enter it in whatever way you want, is limited to the d/m/yyyy format whenever it is called upon as default, unlike what you see in the acceptance criteria, hopefully not an issue.

My process was enjoyable. Everything happened sequentially, including a last minute refactor to create a DateClass class. My doubles/mocking/stubbing with Javascript needs work. And I definitely need to remind myself not to rush ahead with TDD.