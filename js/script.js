const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const mobileBg = document.querySelector(".mobile-bg");
const testimonials = document.querySelectorAll(".testimonial");
const buttons = document.querySelectorAll(".testimonial-button");

// Toggle menu
btn.addEventListener("click", () => {
   btn.classList.toggle("open");
   nav.classList.toggle("flex");
   nav.classList.toggle("hidden");
   mobileBg.classList.toggle("hidden");
   mobileBg.classList.toggle("linear-gradient-bg");

   // Toggle body scroll
   document.body.classList.toggle("menu-open");
});

// Toggle testimonials
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

// Form validation
document.addEventListener("DOMContentLoaded", function () {
   const form = document.querySelector("footer form");
   const emailInput = form.querySelector('input[type="text"]');
   const joinButton = form.querySelector("button");

   form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting by default

      const email = emailInput.value.trim(); // Trim whitespace from the input

      if (isValidEmail(email)) {
         // Remove existing messages before adding a new one
         removeMessages();

         // Create a div for valid email message
         const successDiv = document.createElement("div");
         successDiv.textContent = "Thank you for joining!";
         successDiv.classList.add("success-message");
         form.appendChild(successDiv);
         form.reset(); // Clear the form after successful submission

         // Remove the success message after 3 seconds
         setTimeout(function () {
            successDiv.remove();
         }, 3000);
      } else {
         // Remove existing messages before adding a new one
         removeMessages();

         // Create a div for invalid email message
         const errorDiv = document.createElement("div");
         errorDiv.textContent = "Please enter a valid email address.";
         errorDiv.classList.add("error-message");
         form.appendChild(errorDiv);

         // Remove the error message after 3 seconds
         setTimeout(function () {
            errorDiv.remove();
         }, 3000);
      }
   });

   // Function to validate email address using regex
   function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
   }

   // Function to remove existing messages
   function removeMessages() {
      const messages = form.querySelectorAll(
         ".success-message, .error-message"
      );
      messages.forEach((message) => {
         message.remove();
      });
   }
});
