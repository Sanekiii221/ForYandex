function sta() {
    let logo = document.getElementById('logo');
let logoImg = document.getElementById('logoImg');

let text_main1 = document.getElementById('text_main1');
let text2_main1 = document.getElementById('text2_main1');
let sp1 = document.getElementById('text_pod_main1');
let sp2 = document.getElementById('text2_pod_main1');

let thElements = [];
for (let i = 1; i <= 5; i++) {
    thElements.push(document.getElementById('th_main2_' + i));
}
let th2Elements = [];
for (let i = 1; i <= 5; i++) {
    th2Elements.push(document.getElementById('th2_main_' + i));
}
let linyes = [];
for (let i = 1; i <= 5; i++) {
    linyes.push(document.getElementById('line' + i));
}

if (window.innerWidth <= 900) {
    text_main1.textContent = "ЧТОБЫ ПОДДЕРЖАТЬ МЕЖДУНАРОДНЫЙ ВАСЮКИНСКИЙ ТУРНИР";
    text2_main1.textContent = "ПОСЕТИТЕ ЛЕКЦИЮ НА ТЕМУ";
    sp2.innerHTML = "«ПЛОДОТВОРНАЯ ДЕБЮТНАЯ ИДЕЯ»";

    console.log('1');
    
    for (let i = 0; i < thElements.length; i++) {
        let thElement = thElements[i];
        let th2Element = th2Elements[i];
        let line = linyes[i];
        th2Element.textContent = thElement.textContent;
        
        thElement.style.display = 'none';
        th2Element.style.paddingLeft = '0';
        line.style.border = 'none';
        
        document.getElementById('th2_main_5').style.border = 'none';
        
    }
}
else {
    text_main1.textContent = "ЧТОБЫ ПОДДЕРЖАТЬ МЕЖДУНАРОДНЫЙ ВАСЮКИНСКИЙ ТУРНИР ПОСЕТИТЕ ЛЕКЦИЮ НА ТЕМУ";
    sp1.innerHTML = "«ПЛОДОТВОРНАЯ ДЕБЮТНАЯ ИДЕЯ»";

    console.log('2');
    console.log(window.innerWidth)
}

}













function adjustTable() {
    const thElements = document.querySelectorAll('th[id^="th_main2_"]');
    const th2Elements = document.querySelectorAll('th[id^="th2_main_"]');
    const lines = document.querySelectorAll('td[id^="line"]');

    if (window.innerWidth <= 1000) {
        for (let i = 0; i < thElements.length; i++) {
            th2Elements[i].textContent = thElements[i].textContent;
            thElements[i].classList.add('hidden-th');
            th2Elements[i].style.paddingLeft = '0';
            lines[i].style.border = 'none';
        }
        document.getElementById('th2_main_5').style.border = 'none';
    } else {
        for (let i = 0; i < thElements.length; i++) {
            thElements[i].classList.remove('hidden-th');
            th2Elements[i].textContent = '';
            th2Elements[i].style.paddingLeft = '';
            th2Elements[i].style.display = 'none';
            lines[i].style.border = '';
            
        }
        document.getElementById('line5').style.borderBottom = 'none';
        document.getElementById('th2_main_5').style.border = '';
    }
}

window.addEventListener('resize', adjustTable);
window.addEventListener('load', adjustTable);

window.addEventListener('resize', sta);
window.addEventListener('load', sta);























document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider-pref');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let text_m = document.getElementById('text_main4_off');
    let currentIndex = 0;
    text_m.innerText = 3;
   
    
    let minWithd = window.innerWidth <= 1000 ? 100 : 33;
    console.log(window.innerWidth <= 500 ? 33 : 100);

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * minWithd}%)`;
    }

    nextButton.addEventListener('click', function () {
        if (currentIndex < slides.length - 3) {
            currentIndex++;
            text_m.innerText = currentIndex + 3;

        } else {
            currentIndex = 0;
            text_m.innerText = currentIndex + 3;
        }
        updateSliderPosition();
    });

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
                text_m.innerText = currentIndex + 1;          
        } else {
            currentIndex = slides.length - 1;
            text_m.innerText = currentIndex + 1 ;
        }
        updateSliderPosition();
    });

    updateSliderPosition();
});









const slide = document.querySelector('.container');
let numSlide = 0;
const totalSlides = 5; // количество слайдов

function Update() {
    slide.style.transform = `translateX(-${numSlide * 100}%)`;
    UpdateButtons();
    upPoint(numSlide);
}

function UpdateButtons() {
    const nextButton = document.querySelector('.next1');
    const backButton = document.querySelector('.back1');

    if (numSlide >= totalSlides - 1) {
        backButton.style.background = "#D6D6D6"; // серый цвет, если на последнем слайде
    } else {
        backButton.style.background = "#313131"; // черный цвет в противном случае
    }

    if (numSlide <= 0) {
        nextButton.style.background = "#D6D6D6"; // серый цвет, если на первом слайде
    } else {
        nextButton.style.background = "#313131"; // черный цвет в противном случае
    }
}

function upPoint(numberSlide) {
    const points = document.querySelectorAll('.point_main3');
    points.forEach((point, index) => {
        if (index === numberSlide) {
            point.style.background = "#313131"; // черный цвет для текущего слайда
        } else {
            point.style.background = "#D9D9D9"; // серый цвет для остальных
        }
    });
}

function go() {
    if (numSlide < totalSlides - 1) {
        numSlide++;
    }
    Update();
}

function back() {
    if (numSlide > 0) {
        numSlide--;
    }
    Update();
}

// Инициализация кнопок и точек при загрузке страницы
document.addEventListener('DOMContentLoaded', Update);
