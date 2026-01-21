// signup page 

function signup(){
    let firstName = document.getElementById('firstNameInput').value;
    let lastName = document.getElementById('lastNameInput').value;
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;
    // console.log(firstName)
    // console.log(lastName)
    // console.log(email)
    // console.log(password)

    // now we store data in object 
    let signupObject = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password
    }
    // console.log(signupObject)

    // convert object to json.stringify() for saving in local storage
    let signupObjectToString = JSON.stringify(signupObject);
    localStorage.setItem('signupInformation',signupObjectToString)

    // redirect user to login 
    window.location.href = './index.html';

}