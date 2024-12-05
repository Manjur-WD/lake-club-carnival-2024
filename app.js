Fancybox.bind("[data-fancybox]", {
  // Your custom options
});



const swiper = new Swiper(".avertising-carousel .swiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".custom-next-button", // Custom next button
    prevEl: ".custom-prev-button", // Custom prev button
  },

  // Autoplay settings
  autoplay: {
    delay: 3000, // Time between slide transitions in ms
    disableOnInteraction: false, // Continue autoplay after interaction
  },

  // Breakpoints for responsiveness
  breakpoints: {
    // When the screen width is less than or equal to 480px (small mobile devices)
    480: {
      slidesPerView: 3, // Show 1 slide per view on very small screens
      spaceBetween: 10, // Space between slides on very small screens
    },
  },
});

gsap.from(".heading-text", {
  scaleX: 0,
  delay: 0.5,
});

gsap.from(".avertising-carousel", {
  y: 200,
  delay: 0.8,
  opacity: 0,
});


// Add this JavaScript code inside your <script src="./app.js"> or in a <script> tag.

window.addEventListener('DOMContentLoaded', (event) => {
  // Get the banners and carousel
  const banner1 = document.querySelector('.banner1-load-1');
  const banner2 = document.querySelector('.banner1-load-2');
  const carousel = document.querySelector('.lake-club-winter-carnuival');

  // Function to show and hide banners with timeouts
  function showBanners() {
      // Show banner 1
      banner1.classList.add('active-banner');
      
      
      // After 3 seconds, hide banner 1 and show banner 2
      setTimeout(() => {
          banner1.classList.remove('active-banner');
          banner2.classList.add('active-banner');
      }, 3000);

      // After 3 more seconds, hide banner 2 and show the carousel
      setTimeout(() => {
          banner2.classList.remove('active-banner');
          carousel.classList.add('active-carousel');
      }, 6000);

     
  }

  // Call the function when the page loads
  showBanners();
});

