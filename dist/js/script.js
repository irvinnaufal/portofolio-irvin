// Navbar Fixed
window.onscroll = function () {
  const navbar = document.querySelector("#navbar");
  const sticky = navbar.offsetTop;
  const totop = document.querySelector("#totop");

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    totop.classList.remove("hidden");
    totop.classList.add("flex");
  }else{
    navbar.classList.remove("sticky");
    totop.classList.remove("flex");
    totop.classList.add("hidden");
  }
};

// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("hidden");
});

// Dark Mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
    darkToggle.checked ? html.classList.add("dark") : html.classList.remove("dark");
});