$(".popular__slide").slick({
  autoplay: true,
  dots: true,
  speed: 600,
  slidesToShow: 3.96,
});


$(".popular__slide2").slick({
  autoplay: true,
  dots: true,
  speed: 600,
  slidesToShow: 2.5,
});

$(".popular__slide3").slick({
  autoplay: true,
  dots: true,
  speed: 600,
  slidesToShow: 1.2,
});


$(".our__slide").slick({
  autoplay: true,
  dots: true,
  speed: 600,
  slidesToShow: 3.03,
});


$(".our__slide2").slick({
  autoplay: true,
  dots: true,
  speed: 600,
  slidesToShow: 2.03,
});

$(".our__slide3").slick({
  autoplay: true,
  dots: true,
  speed: 600,
  slidesToShow: 0.8,
});



const userModal = document.querySelector(".user-modal")
const registration = document.querySelector(".registration");
const cancel = document.querySelector(".registration__cancel");
const headerHamburger = document.querySelector(".site-header__tablet-btn");
const tabletNav = document.querySelector(".tablet-header");
const tabletCancel = document.querySelector(".tablet-header__cancel");

userModal.addEventListener("click", () => {
    registration.style.top = "0";
})
cancel.addEventListener("click", () => {
  registration.style.top = "-150%";
})

headerHamburger.addEventListener("click", () => {
  tabletNav.style.left = "0";
})
tabletCancel.addEventListener("click", () => {
  tabletNav.style.left = "-100%";
})
