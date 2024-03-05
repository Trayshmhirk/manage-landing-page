const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const mobileBg = document.querySelector(".mobile-bg");
btn.addEventListener("click", () => {
   btn.classList.toggle("open");
   nav.classList.toggle("flex");
   nav.classList.toggle("hidden");
   mobileBg.classList.toggle("hidden");
   mobileBg.classList.toggle("linear-gradient-bg");
});

// JavaScript
const testimonials = document.querySelectorAll(".testimonial");
const buttons = document.querySelectorAll(".testimonial-button");

buttons.forEach((button) => {
   button.addEventListener("click", () => {
      const index = parseInt(button.getAttribute("data-index"));

      testimonials.forEach((testimonial) => {
         testimonial.classList.remove("active");
      });
      buttons.forEach((button) => {
         button.classList.remove("active");
      });

      testimonials[index].classList.add("active");
      button.classList.add("active");
   });
});
