var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// const logoContainer = document.querySelector('.navbar-brand');
// const logoImg = document.getElementById('logo-image')
// const imgLight = document.createElement('img');
// const imgDark = document.createElement('img');
// imgLight.src = "./assets/img/logo-light.png";
// imgDark.src = "./assets/img/logo-dark.png";
const imgLight = document.querySelector('.light-image');
const imgDark = document.querySelector('.dark-image');
const navbar = document.querySelector('.navbar')

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        let gap = 50;
        if (window.pageYOffset > gap) {
            navbar.classList.add('active-class');
        } else {
            navbar.classList.remove('active-class');
        }


        if (window.pageYOffset > gap) {
            imgDark.classList.remove("active-display");
            imgLight.classList.add("active-display");
        } else {
            imgDark.classList.add("active-display");
            imgLight.classList.remove("active-display");
        }

        // if (window.pageYOffset > gap) {
        //     logoImg.remove();
        //     logoContainer.appendChild(imgDark);
        //     imgLight.remove();

        // } else if (window.pageYOffset < gap) {
        //     imgDark.remove();
        //     logoContainer.appendChild(imgLight);
        //     // logoContainer.appendChild(imgLight);
        // }
        // if (window.pageYOffset > gap) {
        //     imgLight.classList.('active-display')
        // } else if (window.pageYOffset < gap) {

        // }
    });


});