const Banking = artifacts.require("Banking");

contract("Banking", (accounts) => {

 let myBank;
 let expectedResult;
 let result;

 before(async () => {
     myBank = await Banking.deployed();
 });

 //Test createAccount
 describe("Create account", async () => {
   before("Create account", async () => {
    result = await myBank.createAccount();
    result = result.logs[0].args[0].words[0];
   });

   it("Create account", async () => {
    expectedResult = 0;
    assert.equal(result, expectedResult, "Not equal");
  });
 });

 //Test deposit
 describe("Deposit amount", async () => {
   before("Deposit 100", async () => {
     result = await myBank.deposit(100);
     result = result.logs[0].args[0].words[0];
   });

   it("Deposit amount", async () => {
    expectedResult = 0;
    assert.equal(result, expectedResult, "The deposit amount and expected amount should be equal.");
  });
 });

 //Test withdraw
 describe("Withdraw amount", async () => {
   before("Withdraw amount", async () => {
     result = await myBank.withdraw(50);
     result = result.logs[0].args[0].words[0];
   });

   it("Withdraw amount", async () => {
    expectedResult = 0;
    assert.equal(result, expectedResult, "The deposit amount and expected amount should be equal.");
  });
 });
 // Test balance
 describe("Test balance", async () => {

   before("Test balance", async () => {
    result = await myBank.balance();
   });

   it("Deposit assert", async () => {
    result = await myBank.balance();
    expectedResult = 50;
    assert.equal(result, expectedResult, "The deposit amount and expected amount should be equal.");
  });
 });
});
