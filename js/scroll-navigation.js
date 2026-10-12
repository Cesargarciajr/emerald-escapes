// Back to Top Button

const backToTopButton = document.getElementById("back-to-top");

// Show or hide button depending on scroll position
function toggleBackToTop() {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("is-visible");
  } else {
    backToTopButton.classList.remove("is-visible");
  }
}

// Listen for scrolling
window.addEventListener("scroll", toggleBackToTop, {
  passive: true
});

// Check position when page loads
toggleBackToTop();

// Scroll back to top when clicked
backToTopButton.addEventListener("click", () => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.scrollTo({
    top: 0,
    behavior: reducedMotion ? "auto" : "smooth"
  });
});