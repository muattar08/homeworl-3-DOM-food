// =============== Функционал вкладок =====================
const tabs = document.querySelectorAll(".tabheader__item");
const tabContents = document.querySelectorAll(".tabcontent");

const showTab = (index) => {
    tabContents.forEach((content, i) => {
        content.classList.toggle("show", i === index);
        content.classList.toggle("hide", i !== index);
        content.classList.toggle("fade", i === index);
    });
    tabs.forEach((tab, i) => {
        tab.classList.toggle("tabheader__item_active", i === index);
    });
};

const hideTabs = () => {
    tabContents.forEach((content) => {
        content.classList.add("hide");
        content.classList.remove("show", "fade");
    });
    tabs.forEach((tab) => {
        tab.classList.remove("tabheader__item_active");
    });
};

hideTabs();
showTab(0); 

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        hideTabs();
        showTab(index);
    });
});

//======= Функционал слайдера ==============
const totalTab = document.getElementById("total");
const currentTab = document.getElementById("current");
const slides = document.querySelectorAll(".offer__slide");
const buttonPrev = document.querySelector(".offer__slider-prev");
const buttonNext = document.querySelector(".offer__slider-next");

let currentIndex = 0;

totalTab.textContent = `0${slides.length}`;

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.toggle("hide", i !== index);
        slide.classList.toggle("show", i === index);
        slide.classList.toggle("fade", i === index);
    });
    currentTab.textContent = `0${index + 1}`;
};

const hideSlides = () => {
    slides.forEach((slide) => {
        slide.classList.add("hide");
        slide.classList.remove("show", "fade");
    });
};


hideSlides();
showSlide(currentIndex);


buttonNext.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        hideSlides();
        currentIndex++;
        showSlide(currentIndex);
    }
});

buttonPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
        hideSlides();
        currentIndex--;
        showSlide(currentIndex);
    }
});

// ========== Функционал выбора пола ==========
const genders = document.querySelectorAll("#gender .calculating__choose-item");
let activeGender = "woman"; 

const setActiveGender = (genderElement) => {
    if (genderElement.classList.contains("calculating__choose-item_active")) return;

    genders.forEach((el) => el.classList.remove("calculating__choose-item_active"));
    genderElement.classList.add("calculating__choose-item_active");
    activeGender = genderElement.dataset.gender;
};

genders.forEach((gender) => {
    gender.addEventListener("click", () => setActiveGender(gender));
});

// ====== Функционал ввода данных роста веса и возраста ======
const inputs = document.querySelectorAll(".calculating__choose_medium input");
let measurements = {
    height: 0,
    weight: 0,
    age: 0,
};

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        const { id, value } = e.target;
        measurements[id] = value ? parseInt(value) : 0;
    });
});

// ============== Функционал выбора активности =================
const activityItems = document.querySelectorAll(".calculating__choose_big .calculating__choose-item");
let activeActivity = 1.375; //(Невысокая активность)

const setActiveActivity = (activityElement) => {
    if (activityElement.classList.contains("calculating__choose-item_active")) return;

    activityItems.forEach((el) => el.classList.remove("calculating__choose-item_active"));
    activityElement.classList.add("calculating__choose-item_active");
    activeActivity = parseFloat(activityElement.dataset.act); 
};

activityItems.forEach((item) => {
    item.addEventListener("click", () => setActiveActivity(item));
});

// ===== Функционал расчета калорий =====
const result = document.querySelector(".calculating__result span");
const calculateButton = document.querySelector(".calculating__button");

result.textContent = "2700";

const calculateBMR = () => {
    const { height, weight, age } = measurements;
    if (!height || !weight || !age) {
        result.textContent = "Введите все данные";
        return;
    }

    let BMR;
    if (activeGender === "man") {
        BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    BMR = BMR * activeActivity;
    result.textContent = Math.round(BMR);
};
calculateButton.addEventListener("click", calculateBMR);