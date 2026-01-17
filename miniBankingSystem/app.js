let name = document.getElementById("nameInput");
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

// withdrawingFunction
function withdrawingFunction() {

    let withdrawInput = document.getElementById('withdrawingInput');
    let amountWithdrawing = Number(withdrawInput.value);

    let getAfterAdding = Number(localStorage.getItem('initialBalance'));

    if (amountWithdrawing <= getAfterAdding && amountWithdrawing > 0) {

        let currentBalance = getAfterAdding - amountWithdrawing;
        localStorage.setItem('initialBalance', currentBalance);

        document.getElementById('balanceHeading').innerHTML =
            `Balance: ${currentBalance}`;

        // ✅ input clears correctly
        withdrawInput.value = '';

    } else {
        alert('Insufficient Balance, Please recharge your Account');
    }
}
