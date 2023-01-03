const checkbox=document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleClick(e) {
    let inBetween=false;
    if (e.shiftKey && this.checked) {
        checkbox.forEach((e)=>{
            if (e===this || e===lastChecked) {
                inBetween= !inBetween
            }
            if (inBetween) {
                e.checked=true;
            }
        })
    }
    lastChecked=this
}

checkbox.forEach(e=>{
    e.addEventListener('click', handleClick)
})