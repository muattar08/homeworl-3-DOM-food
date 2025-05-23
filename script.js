document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContents = document.querySelectorAll('.tabcontent'),
          slides = document.querySelectorAll('.offer__slide'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current');

    let slideIndex = 0;

    function hideTabContent() {
        tabContents.forEach(item => item.classList.add('hide', 'fade'));
        slides.forEach(item => {
            item.classList.add('hide', 'fade');
        });
        tabs.forEach(item => item.classList.remove('tabheader__item_active'));
    }

    function showTabContent(i = 0) {
        hideTabContent();
        tabContents[i].classList.remove('hide');
        slides[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
        slideIndex = i;
        current.textContent = slides.length < 10 ? `0${slideIndex + 1}` : slideIndex + 1;
    }

    total.textContent = slides.length < 10 ? `0${slides.length}` : slides.length;

    showTabContent(0);

    tabs.forEach((tab, index) => {
        tab.onclick = () => showTabContent(index);
    });

    function plusSlides(n) {
        let newIndex = slideIndex + n;
        if (newIndex >= slides.length) newIndex = 0;
        if (newIndex < 0) newIndex = slides.length - 1;
        showTabContent(newIndex);
    }

    prev.addEventListener('click', () => plusSlides(-1));
    next.addEventListener('click', () => plusSlides(1));

    const orderForm = document.forms.order__form;
    orderForm.onsubmit = (event) => {
        event.preventDefault();
        const fm = new FormData(orderForm);
        const user = {
            phoneNumber: fm.get('phone'),
            name: fm.get('name')
        };
        console.log(user);
    };
});