const scroll = new LocomotiveScroll({
    el: document.querySelector('[#main]'),
    smooth: true
});

// let a = document.querySelector(".page4-1");
// a.getAttribute("data-image");
// console.log(a);
function page4Animation(){
let elemC = document.querySelector("#elem-container");
let fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function(){
    fixed.style.display ="block";
});
elemC.addEventListener("mouseleave", function(){
    fixed.style.display ="none";
});

let elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        let image = e.getAttribute("data-image");
        console.log(e);
        fixed.style.backgroundImage = `url(${image})`
    });
});

}

// function swiperAnimation(){
//     var swiper = new Swiper(".mySwiper", {
//         slidesPerView: "auto",
//         centeredSlides: true,
//         spaceBetween: 30,
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//       });
// }



