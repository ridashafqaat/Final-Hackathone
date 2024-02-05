//   navbar

let items = document.querySelectorAll('.item');
let action = document.getElementById('action');
let icondowns = document.querySelectorAll('.fa-chevron-down');


items.forEach(item => {
    item.addEventListener('click', function (e) {
        if (this.classList.contains('active') || e.target.classList.contains('fa-chevron-down')) {
            return;
        }
        items.forEach(remove_active => {
            remove_active.classList.remove('active');
        });
        console.log(e.target);
        this.classList.add('active');
        document.documentElement.style.setProperty('--height-begin', action.offsetHeight + 'px');
        document.documentElement.style.setProperty('--top-begin', action.offsetTop + 'px');
        document.documentElement.style.setProperty('--height-end', this.offsetHeight + 'px');
        document.documentElement.style.setProperty('--top-end', this.offsetTop + 'px');
        action.classList.remove('runanimation');
        void action.offsetWidth;
        action.classList.add('runanimation');
    }, false)
})
icondowns.forEach(icon => {
    icon.addEventListener('click', function () {
        this.classList.toggle('showMenuChild');
        items.forEach(item => {
            if (item.classList.contains('active')) {
                document.documentElement.style.setProperty('--height-end', item.offsetHeight + 'px');
                document.documentElement.style.setProperty('--top-end', item.offsetTop + 'px');
                return;
            }
        });
    })
})




//    menue button
let menu_icon_box = document.querySelector(".menu_icon_box");
let imp = document.querySelector(".imp");

menu_icon_box.onclick = function () {
    menu_icon_box.classList.toggle("active");
    imp.classList.toggle("active");
}

// document.onclick = function(e){
//     if (!menu_icon_box.contains(e.target) && !main_menu.contains(e.target) ) {
//         menu_icon_box.classList.remove("active");
//         main_menu.classList.remove("active");
//     }
// }


// carsoul 1

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
    showSlider('next');
}

prevDom.onclick = function () {
    showSlider('prev');
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

// loader
var loader = document.getElementById("pre_loader");

window.addEventListener("load", function () {
    setTimeout(function () {
        loader.style.display = "none";
    }, 2000);
});



function search_box() {
    let filter = document.getElementById('mysearch').ariaValueMax.toUpperCase();

    let item = document.querySelectorAll('.product');

    let l = document.getElementsByTagName('h2');

    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('h2')[0];

        let value = a.innerHTML || a.innerText || a.textContent;

        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        }
        else {
            item[i].style.display = "none";
        }
    }
}

// carsoul 2

// scrolltop

window.addEventListener('scroll', function () {
    var scroll = this.document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


