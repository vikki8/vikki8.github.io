
  document.addEventListener("DOMContentLoaded", function() {
      let carousel = document.querySelector(".cert-carousel");
      let slides = carousel.querySelectorAll(".cert-slide");
      let currentIndex = 0;
      let arrowLeft = document.querySelector(".arrow-left");
      let arrowRight = document.querySelector(".arrow-right");

      function showSlide(index) {
          slides.forEach((slide, i) => {
              if (i === index) {
                  slide.classList.add("active");
              } else {
                  slide.classList.remove("active");
              }
          });
      }

      function nextSlide() {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
      }

      function prevSlide() {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          showSlide(currentIndex);
      }

      arrowLeft.addEventListener("click", prevSlide);
      arrowRight.addEventListener("click", nextSlide);
  });
