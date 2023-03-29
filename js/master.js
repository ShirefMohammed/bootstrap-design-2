/* 
    Start Header -----------------------------------------------------------------------------------------
*/

/* Control Links by clicking on bars and x-mark icons*/
document.querySelector(".bars").onclick = () => {
    document.querySelector(".header-content .header-links").classList.remove("translate-x-100");
}

document.querySelector(".x-mark").onclick = () => {
    document.querySelector(".header-content .header-links").classList.add("translate-x-100");
}

/* 
    End Header -----------------------------------------------------------------------------------------
*/

/*
    Start Landing Slider -------------------------------------------------------------------------
*/

// make arrows work
const landing = document.querySelector(".landing");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

let landingImgs = ['landing-image-1.jpg', 'landing-image-2.webp', 'landing-image-3.webp'];
let index = 0;

let changeLandingImg = () => {
    landing.style.backgroundImage = `url(../images/${landingImgs[index]})`;
}

rightArrow.addEventListener('click', () => {
    index !== landingImgs.length - 1 ? index++ : index = 0;
    changeLandingImg();
    relateArrowPullets();
});

leftArrow.addEventListener('click', () => {
    index !== 0 ? index-- : index = landingImgs.length - 1;
    changeLandingImg();
    relateArrowPullets();
});

// make pullets work
const pullets = document.querySelectorAll(".pullets span");

pullets.forEach((span, key) => {
    span.setAttribute('data-slide', key);

    span.addEventListener('click', (e) => {
        e.target.parentElement.querySelector(".active").classList.remove("active")

        e.target.classList.add("active");

        index = parseInt(e.target.dataset.slide);

        changeLandingImg();
    });
});

const relateArrowPullets = () => {
    pullets.forEach((span) => {
        if (parseInt(span.dataset.slide) === index) {
            span.parentElement.querySelector(".active").classList.remove("active")
            span.classList.add("active");
        }
    });
}

/*
    End Landing Slider -------------------------------------------------------------------------
*/

/*
    Start stats -------------------------------------------------------------------------
*/

const parent = document.querySelector(".stats");
const numbers = document.querySelectorAll(".stats .item .number");
let check = false;

window.onscroll = () => {
    if (check === false) {
        if (window.scrollY >= parent.offsetTop + parent.clientHeight - window.innerHeight) {
            numbers.forEach(item => countUp(item));
            check = true;
        }
    }
}

const countUp = (ele) => {
    let goal = ele.dataset.goal;
    let counter = setInterval(() => {
        ele.textContent++;
        if (ele.textContent === goal) {
            clearInterval(counter);
        }
    }, 1500 / goal);
}

/*
    Start stats -------------------------------------------------------------------------
*/