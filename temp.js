document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function() {
        const navbar = document.getElementById("navbar");
        const content = document.getElementById("content");
        const scrollTop = window.pageYOffset;
        
        if (scrollTop < content.offsetTop) {
            navbar.classList.remove("fixed-nav");
            
        } else {
            navbar.classList.add("fixed-nav");
        }
    });
});

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})