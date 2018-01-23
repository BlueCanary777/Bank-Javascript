const assert = require('assert');
const Account = require('../account.js');

describe('Account', function(){

  let account;

  beforeEach(function(){
    account = new Account("Lars", 400, "Personal");
  })

  it('check it works', function(){
    assert.strictEqual(account.owner, "Lars");
  })

})
