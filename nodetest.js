const Statement = require('./statement')
const Account = require('./account')
const Bank = require('./bank')

statement = new Statement()
account = new Account(statement)
bank = new Bank(account)