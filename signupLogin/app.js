// index.html functionality here 
function login(){
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;
    

    // now we get data from localstorage to compare email and password 
    let getInfoFromLocalstorage = localStorage.getItem('signupInformation');



    if(!getInfoFromLocalstorage){
        alert('No account found plz signup first');
        return;
    }
// now we convert the data of localstorage to Json.parse()
let jsonData = JSON.parse(getInfoFromLocalstorage);
console.log(jsonData);
let jsonEmail = jsonData.email;
let jsonPassword = jsonData.password;

if(email == jsonEmail  && password == jsonPassword)   
    {
    window.location.href = './home.html'
}
else{
    alert('Plz Enter valid email and password')
}

document.getElementById('emailInput').value = '';
document.getElementById('passwordInput').value = '';
}