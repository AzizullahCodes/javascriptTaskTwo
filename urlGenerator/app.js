function openWebsite(){let getInput = document.getElementById('userinput').value;
    getInput = getInput.replace(/\s+/g,'');
    getInput = getInput.toLowerCase();
    document.getElementById('userinput').value = "";
    document.getElementById('userinput').focus();
    if(getInput !== ''){let fullUrl = "https://www." + getInput + ".com";
        window.open(fullUrl,"_blank");
    }
    else{alert('plz enter website name')}
}