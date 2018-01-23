const assert = require('assert');
const Bank = require('../bank.js');
const Account = require('../account.js')

describe("Bank", function(){

  let bank;
  let account;
  let account2;

  beforeEach(function(){
    bank = new Bank();
    account = new Account("Lars", 400, "Personal");
    account2 = new Account("Von Shrike", 300, "Personal");
    account3 = new Account("Gustav", 500, "Business");
  })

  it("can add account", function(){
    bank.addAccount(account);
    assert.strictEqual(bank.accountNo(), 1);
  })

  it("can find account owner by name", function(){
    bank.addAccount(account);
    bank.addAccount(account2);
    assert.strictEqual(bank.findByName("Lars"), account);
  })

  it("can get highest account value", function(){
    bank.addAccount(account);
    bank.addAccount(account2);
    assert.strictEqual(bank.findLargestAccount(), account);
  })

  it("total account values", function(){
    bank.addAccount(account);
    bank.addAccount(account2);
    assert.strictEqual(bank.addAccountValues(), 700);
  })

  it("can find average", function(){
    bank.addAccount(account);
    bank.addAccount(account2);
    assert.strictEqual(bank.findAverage(), 350);
  })

  it("can you get value per account type", function(){
    bank.addAccount(account);
    bank.addAccount(account2);
    bank.addAccount(account3);
    assert.strictEqual(bank.getByType("Personal"), 700);
    assert.strictEqual(bank.getByType("Business"), 500);
  })



})
