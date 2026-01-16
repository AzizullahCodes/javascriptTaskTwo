// clear input fuction
function clearInput(){
    document.getElementById('input').value = '';
}
// main function
function process(){
    let input = document.getElementById('input').value;
    // convert input value to lowerCase()
    input = input.toLowerCase();
//    removing space start,end and between
    input = input.replace(/\s+/g,'');
    
    let vowel = '';
    let consonat = '';
    for(let i = 0;i < input.length;i++){
        if(input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u')
        {
            vowel = vowel + input[i]
        }
        else{
            consonat = consonat + input[i]
        }
    }
    document.getElementById('vowel').innerHTML =`${vowel}
     👉 vowels`;
    document.getElementById('consonant').innerHTML = `${consonat}
    👉 consonant`
// clearInput function
clearInput();
}
