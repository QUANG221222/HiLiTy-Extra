let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navbar_a = document.querySelectorAll(".navbar li a");
let sections = document.querySelectorAll("section");
// ==========================
// Navbar
// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");
//     if (top >= offset && top < offset + height) {
//       navbar_a.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector(".navbar a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };
navbar_a.forEach((element) => {
  element.addEventListener("click", () => {
    removeActive();
    element.classList.add("active");
  });
});
function removeActive() {
  for (let el of navbar_a) {
    el.classList.remove("active");
  }
}
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    // dots
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".coming-container", {
  slidesPerView: 5,
  spaceBetween: 30,
});
