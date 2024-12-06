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


//accordion menu
document.querySelectorAll('.faq-accordion__defTerm').forEach(term => {
  term.addEventListener('click', function() {
    const desc = this.nextElementSibling;
    const isActive = this.classList.toggle('is-active');

    if (isActive) {
      desc.style.maxHeight = desc.scrollHeight + 'px';
    } else {
      desc.style.maxHeight = 0;
    }
  });
});