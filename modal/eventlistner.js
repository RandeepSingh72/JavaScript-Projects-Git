const cardButtons=document.querySelectorAll('.card button');
const innerModal=document.querySelector('.inner-model');
const outerModal=document.querySelector('.outer-model');

function cardDetail(event) {
    const button=event.currentTarget;
    const card=button.closest('.card');
    
    const imgSrc=card.querySelector('img').src;
    const desc=card.dataset.description;
    const name=card.querySelector('h2').textContent;
    innerModal.innerHTML=`<img src="${imgSrc.replace('200', '600')}"  alt="${name}" />
    <p>${desc}</p>
    `;
    
    outerModal.classList.add('open');
}

cardButtons.forEach(function (e) {
    e.addEventListener('click',cardDetail);
});

function closeModal() {
    outerModal.classList.remove('open')
};

outerModal.addEventListener('click', function(e) {
    const isOut=!e.target.closest('.inner-model');
    if(isOut){
        closeModal()
    }
});

window.addEventListener('keyup',function(e) {
    if(e.key==='Escape'){
        closeModal()
    }
});