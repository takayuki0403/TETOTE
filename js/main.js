//header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;
  const scrollY = window.pageYOffset;

  if(scrollY >= 824) {
    header.classList.add('header--sticky');
  } else {
    header.classList.remove('header--sticky');
  }
}); 


//menu
const menuBtn = document.getElementById('header__menu');
const menu = document.querySelector('#menu');
const header = document.querySelector('#header');

menuBtn.addEventListener('click', () => {
  if (menu.classList.contains('panelActive')) {
    menu.classList.remove('panelActive');
    header.classList.remove('panelActive');
  } else {
    menu.classList.add('panelActive');
    header.classList.add('panelActive');
  }
});

/* splide__firstView*/
const splide__firstView_options = {
  type: 'fade',  
  autoplay: true,
  rewind: true,
  speed: 1000,
  interval: 5000,
  arrows: false,
  pagination: false,
  drag: false,
  };
  const splide__firstView = new Splide(".splide__firstView", splide__firstView_options);
  splide__firstView.mount();


//swiper -catchCopy-
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  speed: 8000,
  spaceBetween: 32,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  // loopAdditionalSlides: 6,
});




  /* splide__memberList*/
  const splide__memberList_options = {
    type: 'slide',
    arrows: true,
    pagination: false,
    drag: true,
    perMove: 1,
    fixedWidth: 300,
    breakpoints: {
        769: {
          fixedWidth: 246,
          perPage: 1, 
          gap: 16, 
      },
    },
  }
    const splide__memberList = new Splide(".splide__memberList", splide__memberList_options);
    splide__memberList.mount();