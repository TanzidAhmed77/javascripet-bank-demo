document.getElementById("deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-amount");
  const stringDeposit = depositField.value;
  const newdeposit = parseFloat(stringDeposit);

  const deposit = document.getElementById("deposit-area");
  const depositString = deposit.innerText;
  const addDeposit = parseFloat(depositString);

  const total = addDeposit + newdeposit;

  const balance = document.getElementById("balance-area");
  const balanceString = balance.innerText;
  const addBalance = parseFloat(balanceString);

  const totalBalance = addBalance + newdeposit;

  balance.innerText = totalBalance;
  deposit.innerText = total;
  depositField.value = "";
});

document.getElementById("withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-amount");
  const stringWithdraw = withdrawField.value;
  const newWithdraw = parseFloat(stringWithdraw);

  const withdraw = document.getElementById("withdraw-area");
  const withdrawString = withdraw.innerText;
  const addWithdraw = parseFloat(withdrawString);

  const total = addWithdraw + newWithdraw;

  const balance = document.getElementById("balance-area");
  const balanceString = balance.innerText;
  const addBalance = parseFloat(balanceString);

  const totalBalance = addBalance - newWithdraw;

  balance.innerText = totalBalance;
  withdraw.innerText = total;
  withdrawField.value = "";
});
