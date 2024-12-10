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




// smooth scroll
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const targetSection = document.querySelector(href);
    const sectionTop = targetSection.getBoundingClientRect().top;
    const currentPos = window.scrollY;
    const headerHeight = 118;
    const extraOffset = 24;
    const target = sectionTop + currentPos - headerHeight - extraOffset;

    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
});


// accordion menu
// const accordions = document.querySelectorAll(".faq-accordion__defList");
// accordions.forEach((accordion) => {

//   const accordionTriggers = document.querySelectorAll(".c-accordion-trigger");
//   accordionTriggers.forEach((trigger) => {
//     trigger.addEventListener('click', () => {
//       trigger.classList.toggle(".is-active");

//       const content = trigger.querySelector(".c-defList__desc");
//       slideToggle(content);
//     });
//   });
// });

const accordionButtons = document.querySelectorAll(".js-accordion-trigger");

accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener('click', (e) => {
    const body = e.currentTarget.nextElementSibling;
    const textHeight = body.scrollHeight;
    const item = e.currentTarget.parentNode;

    item.classList.toggle('is-active');

    if(item.classList.contains('is-active')) {
      body.style.maxHeight = textHeight + 'px';
    } else {
      body.style.maxHeight = '0';
      // body.style.paddingTop = '0';
    }
  });
});