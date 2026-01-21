// home.jsx 
function logout(){
    localStorage.removeItem('signupInformation');
    window.location.href = './signup.html'
}