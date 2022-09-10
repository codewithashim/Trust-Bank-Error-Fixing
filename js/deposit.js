// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  console.log(newDepositAmount);
  /* 
    1. get previous deposit total by id
  */

  // console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  const previousDepositTotal = getTextElementValueById("deposit-total");
  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;



  if (newDepositAmount !== 0 && isNaN(newDepositAmount) === false) {
    setTextElementValueById("deposit-total", newDepositTotal);
  } else {
    alert('Invalid deposit amount');
  }

  // get previous balance by using the function

  const previousBalanceTotal = getTextElementValueById("balance-total");
  console.log(previousBalanceTotal)

  const newBalanceTotal = newDepositAmount + previousBalanceTotal;

  if (isNaN(newDepositTotal) === false) {
    setTextElementValueById("balance-total", newBalanceTotal);
  } else {
    alert('Empty Balance')
  }



});
