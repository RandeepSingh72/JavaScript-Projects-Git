/*function makePizza(toppings=[]) {
    return new Promise((resolve, reject) => {
        if (toppings.includes('pineapple')) {
            reject (`sorry! wrong pizza`)
        }
            resolve (`here is your pizza with ${toppings}`)
    })
}
async function go() {
        const pizza = await makePizza(['pineapple'])
        console.log(pizza);
        return pizza;
}

function handleErr(err) {
    console.log(err)
}
go().catch(handleErr);*/

               // ASYNC-TYPER-UI
function wait(ms=0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}
function getRandom(min="20", max="120",RandomNumber= Math.random()) {
    return Math.floor(RandomNumber*(max-min)+min);
}

async function draw(el) {
    const text= el.textContent;
    console.log(text);
    let sofar='';
    for (const letter of text) {
        sofar+=letter
        el.textContent=sofar;
        const {typeMin, typeMax}=el.dataset;
        const amountoftimetowait=getRandom(typeMin, typeMax);
        await wait(amountoftimetowait)
    }
}
document.querySelectorAll('[data-type]').forEach(draw);