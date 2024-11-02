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

/* splide__catchCopy*/
  const splide__catchCopy_options = {
    type: 'loop',  
    arrows: false,
    pagination: false,
    drag: false,
    perPage: 2,
    gap: 34,
    autoScroll: {
      speed: 0.5,
      pauseOnHover: false,
    },
      breakpoints: {
        769: {
          perPage: 1, // 画面幅768px未満で表示枚数1枚
          gap: 16, // 画面幅500px未満でスライド間の余白0
        },
      },
    };
    const splide__catchCopy = new Splide(".splide__catchCopy", splide__catchCopy_options);
    splide__catchCopy.mount(window.splide.Extensions);


  /* splide__memberList*/
  const splide__memberList_options = {
    type: 'slide',
    pagination: false,
    drag: true,
    perMove: 1,
    fixedWidth: 300,
    breakpoints: {
        769: {
          perPage: 1, 
          gap: 16, 
      },
    },
  }
    const splide__memberList = new Splide(".splide__memberList", splide__memberList_options);
    splide__memberList.mount();