(() => {
  const storageKey = "ee-favourites";

  function updateFavouriteCounter() {
    let count = 0;

    try {
      const saved = JSON.parse(
        localStorage.getItem(storageKey) || "[]"
      );

      if (Array.isArray(saved)) {
        count = new Set(
          saved.filter((id) => typeof id === "string")
        ).size;
      }
    } catch {
      // Keep the default count if storage cannot be read.
    }

    document.querySelectorAll(".fav-count").forEach((element) => {
      element.textContent = count;
    });
  }

  // Update when the script loads.
  updateFavouriteCounter();

  // Update when returning with the browser's Back/Forward buttons.
  window.addEventListener("pageshow", updateFavouriteCounter);

  // Update if favourites change in another browser tab.
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey || event.key === null) {
      updateFavouriteCounter();
    }
  });
})();