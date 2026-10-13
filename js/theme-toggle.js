(() => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll(".theme-toggle");

  function applyTheme(theme) {
    root.setAttribute("data-bs-theme", theme);

    buttons.forEach((button) => {
      const label = theme === "dark"
        ? "Switch to light mode"
        : "Switch to dark mode";

      button.setAttribute("aria-label", label);
      button.title = label;

      const icon = button.querySelector("i");

      if (icon) {
        icon.classList.remove("fa-sun", "fa-moon");
        icon.classList.add(theme === "dark" ? "fa-sun" : "fa-moon");
      }
    });
  }

  function restoreTheme() {
    let theme = root.getAttribute("data-bs-theme") || "dark";

    try {
      const saved = localStorage.getItem("ee-theme");

      if (saved === "light" || saved === "dark") {
        theme = saved;
      }
    } catch {
      // Keep the current theme.
    }

    applyTheme(theme);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = root.getAttribute("data-bs-theme") === "dark"
        ? "light"
        : "dark";

      applyTheme(theme);

      try {
        localStorage.setItem("ee-theme", theme);
      } catch {
        // Switching still works on the current page.
      }
    });
  });

  window.addEventListener("pageshow", restoreTheme);

  window.addEventListener("storage", (event) => {
    if (event.key === "ee-theme") {
      applyTheme(event.newValue === "light" ? "light" : "dark");
    } else if (event.key === null) {
      applyTheme("dark");
    }
  });

  restoreTheme();
})();