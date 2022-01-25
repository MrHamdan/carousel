const sliders = document.querySelector('.sliders');

const slider = Array.from(document.getElementsByClassName('slider'));

// Buttons

const previousBtn = document.getElementById('button-left');
const nextBtn = document.getElementById('button-right');


let counter = 0;


nextBtn.addEventListener('click', () => {
    counter = (counter < 5) ? counter + 1 : 0;
    sliders.style.transform = 'translate(' + (counter) * -15 + '%)';
})


previousBtn.addEventListener('click', () => {
    counter = (counter > 0) ? counter - 1 : 0;
    sliders.style.transform = 'translate(' + (counter) * -15 + '%)';
})


