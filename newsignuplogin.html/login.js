// login.js
let email = document.getElementById('emailInput');
let password = document.getElementById('passwordInput');
// get data from local storage 
let getData = localStorage.getItem('User');
// convet data to json.parse()

let jsonData = JSON.parse(getData);
console.log(jsonData);

