// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Scroll to "About" section on button click
function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
