

//Hamburger Menu Design Started
const hamburger = document.querySelector('.header .nav-bar .hamburger');
const nav = document.querySelector('.header .nav-bar nav');
hamburger.addEventListener('click', () => {
	nav.classList.toggle('nav-toggle');
	hamburger.classList.toggle('close');
});
console.log(hamburger);
//Hamburger Menu Design Ended



const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})