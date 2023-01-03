const trigger=document.querySelectorAll('a');
const highlight=document.createElement('span');

highlight.classList.add('active');
document.body.appendChild(highlight);

function handleClick() {
    const LinkCroods=this.getBoundingClientRect();
    const croods={
        width:LinkCroods.width,
        height:LinkCroods.height,
        top:LinkCroods.top + window.scrollY,
        left:LinkCroods.left + window.screenX
    }
    
    highlight.style.height=`${croods.height}px`;
    highlight.style.width=`${croods.width}px`;
    highlight.style.transform=`translate(${croods.left}px, ${croods.top}px)`
}


trigger.forEach((e)=>{
e.addEventListener('mouseenter', handleClick)
})