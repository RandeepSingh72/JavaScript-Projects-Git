const navButton = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navButton.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navButton.setAttribute("aria-expanded", "true");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", "false");
    navButton.setAttribute("aria-expanded", "false");
  }
});
