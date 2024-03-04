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
