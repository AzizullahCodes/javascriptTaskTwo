// login.js
let email = document.getElementById('emailInput');
let password = document.getElementById('passwordInput');
// get data from local storage 
let getData = localStorage.getItem('User');
// convet data to json.parse()

let jsonData = JSON.parse(getData);
console.log(jsonData);
let storeEmail = jsonData.email;
let storePassword = jsonData.password


function login(){
  if(email.value == storeEmail && password.value == storePassword){
    window.location.href = "./home.html"
  }
  else{
    alert('Enter valid email and password')
  }
}


function isLoggedIn(){
    let getAuth = localStorage.getItem('User');
    if(getAuth != null){
        window.location.href = './home.html'
    }
}