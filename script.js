const sliders = document.querySelector('.sliders');

const slider = Array.from(document.getElementsByClassName('slider'));

// Buttons

const previousBtn = document.getElementById('button-left');
const nextBtn = document.getElementById('button-right');


let counter = 0;

// Slider Autoplay
setInterval(() => {
    counter = (counter < 5) ? counter + 1 : 0;
    sliders.style.transform = 'translate(' + (counter) * -15 + '%)';

}, 2000);


nextBtn.addEventListener('click', () => {
    counter = (counter < 5) ? counter + 1 : 0;
    sliders.style.transform = 'translate(' + (counter) * -15 + '%)';
})


previousBtn.addEventListener('click', () => {
    counter = (counter > 0) ? counter - 1 : 5;
    sliders.style.transform = 'translate(' + (counter) * -15 + '%)';
})


'use strict';

$(function () {

    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function () {
            $slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function () {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});
