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

$(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../img/product/prev.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../img/product/next.png"></button>',
    responsive: [
      {
        breakpoint: 545,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
