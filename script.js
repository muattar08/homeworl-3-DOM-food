document.addEventListener('DOMContentLoaded', () => {
  const tabItems = document.querySelectorAll('.tabheader__item');
  const tabContents = document.querySelectorAll('.tabcontent');

  tabItems.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabItems.forEach(t => t.classList.remove('tabheader__item_active'));
      tabContents.forEach(c => c.style.display = 'none');

      tab.classList.add('tabheader__item_active');
      tabContents[index].style.display = 'block';
    });
  });

  if (tabItems.length && tabContents.length) {
    tabItems[0].classList.add('tabheader__item_active');
    tabContents.forEach((c, i) => c.style.display = i === 0 ? 'block' : 'none');
  }

  const slides = document.querySelectorAll('.offer__slide');
  const prevBtn = document.querySelector('.offer__slider-prev');
  const nextBtn = document.querySelector('.offer__slider-next');
  const currentCounter = document.getElementById('current');

  let currentSlide = 0;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach(s => s.style.display = 'none');
    slides[index].style.display = 'block';

    if (currentCounter) currentCounter.textContent = index + 1;

    currentSlide = index;
  }

  showSlide(currentSlide);

  if (prevBtn) prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });

  if (nextBtn) nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });


  const calcChooseItems = document.querySelectorAll('.calculating__choose-item');

  calcChooseItems.forEach(item => {
    item.addEventListener('click', () => {
      calcChooseItems.forEach(i => i.classList.remove('calculating__choose-item_active'));
      item.classList.add('calculating__choose-item_active');
    });
  });


  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert(`Кнопка "${button.textContent.trim()}" нажата!`);
    });
  });
});
