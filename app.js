var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
    breakpoints: {
      786: {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
        autoplay: {
          delay: 2500,
        }
      }
    }
  });