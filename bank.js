function Bank(){
  this.accounts = [];
};

Bank.prototype.addAccount = function(account){
  this.accounts.push(account);
};

Bank.prototype.accountNo = function(){
  return this.accounts.length;
};

Bank.prototype.findByName = function(name){
  for (account of this.accounts){
    if (account.owner === name){
      return account;
    }
  }
}

Bank.prototype.findLargestAccount = function(amount){
  var values = [];
  for (account of this.accounts){
    var value = account.amount;
    values.push(value);
  }
  var finalval = Math.max.apply(null, values);

  for (account of this.accounts){
    if (account.amount == finalval){
      return account;
    }
  }
}

Bank.prototype.addAccountValues = function(){
  var total = 0;
  for (account of this.accounts){
    total += account.amount;
  }
  return total;
}

Bank.prototype.findAverage = function(){
  return this.addAccountValues() / this.accountNo();
}

Bank.prototype.getByType = function(type){
  var value = 0;
  for (account of this.accounts){
    if (account.type == type){
      value += account.amount;
    }
  }
  return value;
}


module.exports = Bank;
