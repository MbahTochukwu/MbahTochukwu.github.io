// const slides = document.querySelectorAll('.slide');
// let current = 0;

// const showSlide = index => {
//   slides.forEach((slide, i) => {
//     slide.classList.remove('active');
//     if (i === index) {
//       slide.classList.add('active');
//     }
//   });
// };

// document.querySelector('.prev').addEventListener('click', () => {
//   current = (current === 0) ? slides.length - 1 : current - 1;
//   showSlide(current);
// });

// document.querySelector('.next').addEventListener('click', () => {
//   current = (current + 1) % slides.length;
//   showSlide(current);
// });

// // Optional auto-slide
// setInterval(() => {
//   current = (current + 1) % slides.length;
//   showSlide(current);
// }, 5000);



let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change image every 3 seconds

// Show first slide on load
showSlide(currentSlide);

