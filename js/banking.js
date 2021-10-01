document.getElementById('deposit-button').addEventListener('click',function(){
   const depositValue = document.getElementById('deposit-amound');
   const newDepositeAmountText = depositValue.value;
   const newDepositeAmount = parseFloat(newDepositeAmountText);
//    console.log(depositeAmount);

//total deposite
   const depositTotal = document.getElementById('deposite-total');
   const previouseDepositeAmountText = depositTotal.innerText;
   const previouseDepositeAmount =parseFloat(previouseDepositeAmountText);
   const newDepositeTotal = newDepositeAmount + previouseDepositeAmount;
     depositTotal.innerText = newDepositeTotal;

//total balance
const balanceTotal = document.getElementById('balance-total');

const previousBalanceText = balanceTotal.innerText;
const previousBalance = parseFloat(previousBalanceText);
const newBalanceTotal = newDepositeAmount+ previousBalance;
balanceTotal.innerText=newBalanceTotal;

     depositValue.value ='';
 
 });




//  handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click',function(){
    //input value or withdraw
    const withdrawValue = document.getElementById('withdraw-amound');
    const newWithdrawAmountText = withdrawValue.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);



// withdraw this is here
    const withdrawTotal = document.getElementById('withdraw-amount');
    const previousBalanceAmountText = withdrawTotal.innerText;
    const previousBalanceAmount =parseFloat(previousBalanceAmountText);
    const newBalance = previousBalanceAmount-newWithdrawAmount ;
      withdrawTotal.innerText = newBalance;


    //   total balance
      const balanceTotal = document.getElementById('balance-total');
  
      const previousBalanceText = balanceTotal.innerText;
      const previousBalance = parseFloat(previousBalanceText);
      const newBalanceTotal = previousBalance - newWithdrawAmount ;
      balanceTotal.innerText=newBalanceTotal;




      withdrawValue.value='';

});


 