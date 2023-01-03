const jokeHolder=document.querySelector('.joke p');
const jokeButton=document.querySelector('.getJoke');

const buttonText = [
    'Ugh.',
    '🤦🏻‍♂️',
    'omg dad.',
    'you are the worst',
    'seriously',
    'stop it.',
    'please stop',
    'that was the worst one',
  ];

  async function fetchJoke() {
    const res=await fetch('https://icanhazdadjoke.com',{
        headers:{
            Accept: 'application/json',
        }
    })
    const data=await res.json();
    console.log(data);
    return data;
  };
  function randomFromArray(arr, not) {
    const item=arr[Math.floor(Math.random() * arr.length)];
    if (item===not) {
        console.log('we used it ');
        return randomFromArray(arr, not)
    };
    return item;
  }

  async function handleClick() {
    const {joke}=await fetchJoke();
    jokeHolder.textContent=joke;
    jokeButton.textContent=randomFromArray(buttonText);
  };

  jokeButton.addEventListener('click', handleClick);