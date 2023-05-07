const input = document.querySelector('.inputfield');
const number = document.querySelector('.number');
const result = document.querySelector('.result');
const complement= document.querySelector('.complement');
const countP= document.querySelector('.count');
let count = 4;
countP.innerHTML=`Number of Tries Left: ${count}`;
let randomNo= Math.floor(Math.random() * 11);
   number.innerHTML=`"${randomNo}"`;


   input.addEventListener('change',()=>{

    if(input.value==randomNo){

        result.style.display="block";
        input.style.backgroundColor="rgb(116, 193, 0)"
    }
    
   else if(input.value!=randomNo){

        
        input.style.backgroundColor="red";
        count-=1;
        countP.innerHTML=`Number of Tries Left: ${count}`;
        if(count==0){

            countP.innerHTML=`you ran out of Tries. Refresh to guess again!`;
            input.disabled=true;
            result.style.display="block";
            complement.innerHTML="☹ Oops! You couldn't guess the Number right!"
        }
    }
    
   })