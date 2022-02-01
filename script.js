// Sliders
const sliders = document.querySelector('.sliders');
const slider = Array.from(document.getElementsByClassName('slider'));

// Buttons
const previousBtn = document.getElementById('button-left');
const nextBtn = document.getElementById('button-right');

const indicatorParent = document.querySelector('.radios ul');
const indicators = document.querySelectorAll('.radios li');

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        document.querySelector('.radios .selected').classList.remove('selected');
        indicator.classList.add('selected');
        sliders.style.transform = 'translateX(' + (i) * -15 + '%)';
        counter = i;
    });
});


let counter = 0;



// Slider Autoplay
setInterval(() => {
    counter = (counter < 5) ? counter + 1 : 0;
    document.querySelector('.radios .selected').classList.remove('selected');
    indicatorParent.children[counter].classList.add('selected');
    sliders.style.transform = 'translate(' + (counter) * -15 + '%)';

}, 8000);



// Slider Buttons
nextBtn.addEventListener('click', () => {
    counter = (counter < 5) ? counter + 1 : 0;
    document.querySelector('.radios .selected').classList.remove('selected');
    indicatorParent.children[counter].classList.add('selected');
    sliders.style.transform = 'translate(' + (counter) * -15 + '%)';
})


previousBtn.addEventListener('click', () => {
    counter = (counter > 0) ? counter - 1 : 5;
    document.querySelector('.radios .selected').classList.remove('selected');
    indicatorParent.children[counter].classList.add('selected');
    sliders.style.transform = 'translate(' + (counter) * -15 + '%)';
})

