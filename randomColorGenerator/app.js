/* function generateColor() {
      let chars = "0123456789abcdef";
      let color = "#";

      for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        color += chars[randomIndex];
      }

      console.log(color);
      let div = document.getElementById("ul");
      div.style.background = color;
      div.textContent = color;
    } */

      function generateColor(){
        let chars = '0123456789abcdef';
        let color = '#';
        for(let i = 0;i < 6 ;i++){
            let randomIndex = Math.floor(Math.random()*chars.length);
            // console.log(randomIndex) 
            color = color + chars[randomIndex];
            // console.log(color)
        }
        let div = document.getElementById('ul');
        div.style.background = color;
        div.innerHTML = color;
      }