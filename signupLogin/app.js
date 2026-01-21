// index.html functionality here 
function login(){
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;
    // console.log(email);
    // console.log(password)

    // now we get data from localstorage to compare email and password 
    let getInfoFromLocalstorage = localStorage.getItem('signupInformation');
    // console.log(getInfoFromLocalstorage)
// now we convert the data of localstorage to Json.parse()
let jsonData = JSON.parse(getInfoFromLocalstorage);
console.log(jsonData)
}