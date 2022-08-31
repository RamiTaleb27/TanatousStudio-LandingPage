$(".owl-carousel").owlCarousel({
  loop: true,
  items: 4,
  margin: 30,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: false,
      autoplay: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: false,
    },
  },
});

//responsive Navbar script
// const navToggler = document.querySelector(".nav_toggler");
// navToggler.addEventListener("click", navToggle);

// function navToggle() {
//   navToggler.classList.toggle("active");
//   const nav = document.querySelector(".nav");
//   nav.classList.toggle("open");
//   if (nav.classList.contains("open")) {
//     nav.style.maxHeight = nav.scrollHeight + "px";
//   } else {
//     nav.removeAttribute("style");
//   }
// }

$(".nav_toggler").click(function(){
$(".nav").toggleClass("open");
});
