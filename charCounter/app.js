
//    function charCounter 
const charCounter = ()=>{
    let input = document.getElementById('input');
        input = input.value.toLowerCase();
    // console.log(input)
    let count = 1;
    let result = '';
    for(let i = 0;i < input.length;i++){
        if(input[i] === input[i + 1]){
            count++;
        }
        else{
            
            result = result + count + input[i];
            count = 1;
        }
    }
    document.getElementById('heading').innerHTML = result;
}