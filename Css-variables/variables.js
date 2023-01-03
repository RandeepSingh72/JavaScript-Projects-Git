const inputs= Array.from(document.querySelectorAll('.controls input'))
console.log(inputs);

function handleUpdate() {
    const suffix=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
}

inputs.forEach(function(e) {
    e.addEventListener('mousemove', handleUpdate)
});
inputs.forEach(function(e) {
    e.addEventListener('change', handleUpdate)
})