const triggers=document.querySelectorAll('.cool > li');
const background=document.querySelector('.dropdownBackground');
const nav=document.querySelector('.top');

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(()=>this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open')

    const dropdown= this.querySelector('.dropdown');
    const dropdownCroods=dropdown.getBoundingClientRect();
    const navCroods=nav.getBoundingClientRect()

    const croods={
        height:dropdownCroods.height,
        width:dropdownCroods.width,
        top:dropdownCroods.top - navCroods.top,
        left:dropdownCroods.left-navCroods.left,
    }

    background.style.setProperty('width',`${croods.width}px`);
    background.style.setProperty('height',`${croods.height}px`);
    background.style.setProperty('transform',`translate(${croods.left}px, ${croods.top}px)`);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open')
}

triggers.forEach(e=>e.addEventListener('mouseenter', handleEnter));
triggers.forEach(e=>e.addEventListener('mouseleave', handleLeave));