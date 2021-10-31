pragma solidity ^0.5.0;

contract Banking {

  mapping(address => uint) accounts;
  event transactionResult(uint result); // Event

  //Creates accounts
  function createAccount() public returns (uint) {
    require(msg.sender != address(0x0));
    accounts[msg.sender]=0;
    emit transactionResult(0);
    return 0;
    }
  //Deposit moneyß
  function deposit(uint amount) public returns (uint) {
    require(amount > 0);
    accounts[msg.sender] = accounts[msg.sender] + amount;
    emit transactionResult(0);
    return 0;
    }
  //Withdraw money
  function withdraw(uint amount) public returns (uint) {
    require(amount > 0 && amount <= accounts[msg.sender]);
    accounts[msg.sender] = accounts[msg.sender] - amount;
    emit transactionResult(0);
    return 0;
    }
  //Check balance
  function balance() public view returns (uint) {
    return accounts[msg.sender];
  }
}
