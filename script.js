// Hamburger Menu Design Started
let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector(".navbar a");

hamburger.addEventListener("click", () => {
    ul.classList.toggle("showData");

    if(ul.className.contains("showData")){
        document.getElementById("bar").className="fa-regular fa-thumbs-up";
    }
    else{
        document.getElementById("bar").className="fa-solid fa-bars";
    }
})
// Hamburger Menu Design Ended

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    }
    function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    }



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