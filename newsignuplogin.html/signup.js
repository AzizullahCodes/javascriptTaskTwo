// signup.js 
let name = document.getElementById('nameInput');
let email = document.getElementById('emailInput');
let password = document.getElementById('passwordInput');
let repeatPassword = document.getElementById('repeatPasswordInput');

// clearinput function
function clearinput(){
    name.value = '';
    email.value = '';
    password.value = '';
    repeatPassword.value = '';
}
// signup function
function signup(){
    const signupObject = {
        name : name.value,
        email : email.value,
        password : password.value,
        repeatPassword : repeatPassword.value
    }
    // conver signupObject to string for storing in local storage
    let dataToString = JSON.stringify(signupObject);
    // storing in localstorage 
    localStorage.setItem('User',dataToString)

    // direct user to login page 
    window.location.href = "./index.html";

    // calling clearinput function
    clearinput();


}


