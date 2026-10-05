const track = document.getElementById("featured-track");
const previous = document.getElementById("featured-prev");
const next = document.getElementById("featured-next");
const progress = document.getElementById("featured-progress");

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

function moveCards(direction) {
  const card = track.querySelector(".featured-card");
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;

  track.scrollBy({
    left: direction * (card.offsetWidth + gap),
    behavior: reducedMotion.matches ? "instant" : "smooth"
  });
}

function updateCarousel() {
  const maximum = track.scrollWidth - track.clientWidth;
  const position = Math.max(0, Math.min(track.scrollLeft, maximum));
  const percentage = maximum > 0 ? (position / maximum) * 100 : 0;

  progress.style.width = `${percentage}%`;
  progress.parentElement.setAttribute(
    "aria-valuenow",
    Math.round(percentage)
  );

  previous.disabled = position <= 1;
  next.disabled = maximum <= 1 || position >= maximum - 1;
}

previous.addEventListener("click", () => moveCards(-1));
next.addEventListener("click", () => moveCards(1));

track.addEventListener("scroll", updateCarousel, { passive: true });

const resizeObserver = new ResizeObserver(updateCarousel);
resizeObserver.observe(track);

updateCarousel();