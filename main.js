// !Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".uil-arrow-up",
    prevEl: ".uil-arrow-down",
  },
  breakpoints:{
    1200:{
        slidesPerView:6,
    },
    1000:{
        slidesPerView:5,
    },
    800:{
        slidesPerView:4,
    },
    600:{
        slidesPerView: 3, 
    },
    400:{
        slidesPerView:2,
    },
    200:{
        slidesPerView:1,
    }
}
});

//   !menu

const menu = document.querySelector(".menu"),
  openMenu = document.querySelector("#open_menu"),
  closeMenu = document.querySelector("#close_menu");

  openMenu.addEventListener("click", ()=>{
    menu.style.right= "0px";
    openMenu.style.display= "none";
    closeMenu.style.display= "block";
  })

  closeMenu.addEventListener("click", ()=>{
    menu.style.right= "-100%";
    openMenu.style.display= "block";
    closeMenu.style.display= "none";
  })