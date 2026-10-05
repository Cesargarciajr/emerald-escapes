(() => {
  const counters = document.querySelectorAll(".stats-counter");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (
    prefersReducedMotion.matches ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const formatter = new Intl.NumberFormat("en-IE");
  const duration = 1600;

  function animateCounter(counter) {
    const target = Number(counter.dataset.target);
    let startTime;

    function update(timestamp) {
      startTime ??= timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Slow down gently as the counter reaches its final value.
      const eased = 1 - Math.pow(1 - progress, 3);

      counter.textContent = formatter.format(
        Math.round(target * eased)
      );

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  counters.forEach((counter) => {
    // Keep the final value accessible during the animation.
    counter.parentElement.setAttribute(
      "aria-label",
      counter.textContent.trim()
    );
    counter.setAttribute("aria-hidden", "true");
    counter.textContent = "0";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
})();