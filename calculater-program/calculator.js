const buttons=Array.from(document.querySelectorAll('.btn'));
const display=document.querySelector('#display');

buttons.map(button=>{button.addEventListener('click',(e)=>{
    switch(e.target.innerText){
        case'Clear All':
          display.innerText='';
          break;
          case'=':
          if (display.innerText.slice(-1).includes('+')) {
            return display.innerText=eval(display.innerText.slice(0,-1));
          }if (display.innerText.slice(-1).includes('-')) {
            return display.innerText=eval(display.innerText.slice(0,-1))
          }if (display.innerText.slice(-1).includes('*')) {
            return display.innerText=eval(display.innerText.slice(0,-1))
          }if (display.innerText.slice(-1).includes('/')) {
            return display.innerText=eval(display.innerText.slice(0,-1))
          }
          else{
            display.innerText= eval(display.innerText);
          }
          break;
          case '←':
            display.innerText=display.innerText.slice(0,-1);
            break;
            case '+':
              if(display.innerText.slice(-1).includes('+')){
                return;
              }if(display.innerText.slice(-1).includes('-')){
                return display.innerText=display.innerText.slice(0,-1)+e.target.innerText
              }if(display.innerText.slice(-1).includes('*')){
                return display.innerText=display.innerText.slice(0,-1)+e.target.innerText
              }if(display.innerText.slice(-1).includes('/')){
                return display.innerText=display.innerText.slice(0,-1)+e.target.innerText
              }
            else{
              display.innerText = display.innerText + e.target.innerText;
            }
            
            case '*':
              if(display.innerText.slice(-1).includes('*')){
                return;
              }if(display.innerText.slice(-1).includes('+')){
                return display.innerText=display.innerText.slice(0,-1)+e.target.innerText
              }if(display.innerText.slice(-1).includes('-')){
                return display.innerText=display.innerText.slice(0,-1)+e.target.innerText
              }if(display.innerText.slice(-1).includes('/')){
                return display.innerText=display.innerText.slice(0,-1)+e.target.innerText
              }
            else{
              display.innerText= display.innerText + e.target.innerText;
            }
            case '/':
              if(display.innerText.slice(-1).includes('/')){
                return;
              }if(display.innerText.slice(-1).includes('+')){
                return display.innerText=display.innerText.slice(0,-1)+e.target.innerText
              }if(display.innerText.slice(-1).includes('-')){
                return display.innerText=display.innerText.slice(0,-1)+e.target.innerText
              }if(display.innerText.slice(-1).includes('*')){
                return display.innerText=display.innerText.slice(0,-1)+e.target.innerText
              }
            else{
              display.innerText=display.innerText + e.target.innerText;
            }
            case '-':
              if(display.innerText.slice(-1).includes('-')){
                return;
              }if(display.innerText.slice(-1).includes('+')){
                return display.innerText=display.innerText.slice(0,-1)+e.target.innerText
              }if(display.innerText.slice(-1).includes('/')){
                return display.innerText=display.innerText.slice(0,-1)+e.target.innerText
              }if(display.innerText.slice(-1).includes('*')){
                return display.innerText=display.innerText.slice(0,-1)+e.target.innerText
              }
             else{
               display.innerText=display.innerText || display.innerText;
            }
        default:
        display.innerText = display.innerText+e.target.innerText;
    }
  });
});
                  
