// home.js
function logout(){
    localStorage.removeItem('User');
    window.location.href = 'signup.html'
}