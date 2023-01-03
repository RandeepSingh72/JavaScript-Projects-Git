const sliderImages=document.querySelectorAll('.slide-in');

  function checkSlide() {
    sliderImages.forEach(function (e) {
        const slideInAt=(window.scrollY+window.innerHeight)-e.height/2;
        console.log(slideInAt);

        const imageBottom=e.offsetTop+e.height;
        console.log(imageBottom);

        const isHalfShown=slideInAt>e.offsetTop;
        console.log(isHalfShown);

        const isnotScrolled=window.scrollY<imageBottom;
        console.log(isnotScrolled);

        if (isHalfShown && isnotScrolled) {
            e.classList.add('active');
        }
        else{
            e.classList.remove('active');
        }
    })
  };

  window.addEventListener('scroll', checkSlide);