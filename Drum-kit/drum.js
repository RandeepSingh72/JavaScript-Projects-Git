function playSound(e) {
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`)

    if (!audio) {
        return;
    }
    key.classList.add('playing')
    audio.currentTime=0
    audio.play();
}
function removeTransition(e) {
    if (!e.propertName=='transform') {
       return
    }
    e.target.classList.remove('playing');
}

const keys=Array.from(document.querySelectorAll('.key'));

keys.forEach(function (e) {
    e.addEventListener('transitionend', removeTransition);
})

window.addEventListener('keydown', playSound);
