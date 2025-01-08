const nav = document.querySelector(".nav-list");
const burger = document.querySelector(".menu-button");

burger.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

const search = document.querySelector(".search");
const modal = document.querySelector(".search-modal");

search.addEventListener("click", () => {
  modal.classList.toggle("modal_active");
});
