const wrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

function goTo(i) {
    if (i < 0) {
        index = slides.length - 1;
    } else if (i >= slides.length) {
        index = 0;
    } else {
        index = i;
    }
    wrapper.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => {
    goTo(index + 1);
});

prev.addEventListener('click', () => {
    goTo(index - 1);
});

setInterval(() => {
    goTo(index + 1);
}, 5000);
