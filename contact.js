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





let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");
let normalEyeStyle = () => {
    eyeL.style.cssText = `
    left:0.6em;
    top: 0.6em;
  `;
    eyeR.style.cssText = `
  right:0.6em;
  top:0.6em;
  `;
};
let normalHandStyle = () => {
    handL.style.cssText = `
        height: 2.81em;
        top:8.4em;
        left:7.5em;
        transform: rotate(0deg);
    `;
    handR.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(0deg)
    `;
};
//When clicked on username input
usernameRef.addEventListener("focus", () => {
    eyeL.style.cssText = `
    left: 0.75em;
    top: 1.12em;  
  `;
    eyeR.style.cssText = `
    right: 0.75em;
    top: 1.12em;
  `;
    normalHandStyle();
});
//When clicked on password input
passwordRef.addEventListener("focus", () => {
    handL.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        left: 11.75em;
        transform: rotate(-155deg);    
    `;
    handR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
  `;
    normalEyeStyle();
});
//When clicked outside username and password input
document.addEventListener("click", (e) => {
    let clickedElem = e.target;
    if (clickedElem != usernameRef && clickedElem != passwordRef) {
        normalEyeStyle();
        normalHandStyle();
    }
});



// form alert code
function displaylogin() {
    var username=document.getElementById("username")
    var userpassword=document.getElementById("password")


    if (username.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter Your Email",
          });
        
    } else if (userpassword.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter Your password",
          });
        // alert("please enter your password");
        
    } else {
        Swal.fire({
            title: "USER",
            text: "Login succesfully ",
            icon: "success"
          });
          setTimeout(()=>{
            window.location.href = "./index.html"
          },3000)
         
    }
}

// function validation() {
//     swal("Good job!", "You clicked the button!", "success")
// }

// submitBtn.addEventListener('click',()=>{
//     display();
//     validation();
// })

// loader
// var loader = document.getElementById("pre_loader");

// window.addEventListener("load", function () {
//     setTimeout(function () {
//         loader.style.display = "none";
//     }, 2000);
// });

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



