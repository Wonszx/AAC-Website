//for scroller in skill list
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
// bullet form pagination
    pagination: {
      el: '.swiper-pagination' ,
      clickable:true,
      dynamicBullets: true
    },
  
// Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

//forda responsive breakpoints depende sa view
    breakpoints:{
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });

//Scroll-button to the top
// Show button when scrolled down
     window.addEventListener("scroll", function() {
       document.body.classList.toggle("scrolling", window.scrollY > 200);
     });
   
// para smooth scroll to the top
     function scrollToTop() {
       window.scrollTo({
         top: 0,
         behavior: "smooth"
       });
     }
