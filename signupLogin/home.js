// home.jsx 
let h2El = document.getElementById('h2');
function getData(){
    const fecthUser = localStorage.getItem('User');
    const user = JSON.parse(fecthUser);
    console.log(user);
    if(user){
h2El.innerHTML = `Hello ${user.name}`
    }
    else{
        window.location.href = './index.html'
    }
}
function logout(){
    localStorage.removeItem('signupInformation');
    window.location.href = './signup.html'
}