let name = document.getElementById('nameInput');
let accountNumber = document.getElementById('accountNumberInput');
// accountNumber = Number(accountNumber)
let initialBalance = document.getElementById('initialBalance');
// initialBalance = Number(initialBalance)
let depositAmount = document.getElementById('depositAmount');




// function createAccount
function createAccount(){
    // console.log(name.value);
    // console.log(accountNumber.value);
    // console.log(initialBalance.value)
     localStorage.setItem('name',name.value);
     localStorage.setItem('accountNumber',accountNumber.value);
    localStorage.setItem('initialBalance',initialBalance.value);
    // get name,account number and initial 
    let getName = localStorage.getItem('name');
    console.log(getName);
    let getAccountNumber = localStorage.getItem('accountNumber');
    console.log(getAccountNumber);
    let getInitialBalance = localStorage.getItem('initialBalance');
    console.log(getInitialBalance);

    document.getElementById('nameHeading').innerHTML =`Account Holder Name: ${getName}`
    document.getElementById('accountNumberHeading').innerHTML = `Account Number: ${getAccountNumber}`;
    document.getElementById('balanceHeading').innerHTML = `Balance: ${getInitialBalance}`;

    name.value = '';
    accountNumber.value = '';
    initialBalance.value = ''
    
}

// function Deposit Amount
function addAmount(){
    let getInitialBalance = Number(localStorage.getItem('initialBalance'));
   
    console.log(getInitialBalance)
    console.log(depositAmount.value)
    let newBalance = getInitialBalance + Number(depositAmount.value);
    console.log(newBalance)
    localStorage.setItem('initialBalance',newBalance);
    let getAfterAdding = localStorage.getItem('initialBalance');
    document.getElementById('balanceHeading').innerHTML = `Balance: ${getAfterAdding}`;

    depositAmount.value = '';
}

// withdrawing function
function withdrawingFunction(){
    let amountWithdrawing = document.getElementById('withdrawingInput');
    amountWithdrawing = Number(amountWithdrawing.value)
    console.log(amountWithdrawing);
      let getAfterAdding = localStorage.getItem('initialBalance');
      console.log(getAfterAdding);
    //   condition 
    if(amountWithdrawing <= getAfterAdding){
        let currentBalance = getAfterAdding - amountWithdrawing;
        localStorage.setItem('initialBalance',currentBalance)
        // console.log(currentBalance)
        let getAfterWithdrawing = localStorage.getItem('initialBalance');
        // console.log(getAfterWithdrawing)
            document.getElementById('balanceHeading').innerHTML = `Balance: ${getAfterWithdrawing}`;
    }
    else{
        alert('Insufficient Balance, Plz recharge your Account')
    }

    amountWithdrawing.value = '';
}