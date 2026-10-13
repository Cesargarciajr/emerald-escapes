(() => {
  let theme = "dark";

  try {
    const saved = localStorage.getItem("ee-theme");

    if (saved === "light" || saved === "dark") {
      theme = saved;
    }
  } catch {
    // Use the default if browser storage is unavailable.
  }

  document.documentElement.setAttribute("data-bs-theme", theme);
})();