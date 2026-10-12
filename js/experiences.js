(() => {
  const grid = document.getElementById("experiences-grid");
  if (!grid) return;

  // Fictional packages and sample prices.
  const trips = [
    {
      id: "dublin", category: "city", image: "dublin",
      title: "Georgian Dublin & Literary Pubs",
      location: "Dublin City, Co. Dublin",
      price: 289, duration: "2 nights", season: "All year",
      description: "Explore Georgian streets, independent bookshops and literary pubs with a local guide.",
      included: ["Two nights in a hotel", "Guided city walk", "Literary pub experience"]
    },
    {
      id: "galway", category: "city", image: "galway",
      title: "Galway Latin Quarter Weekend",
      location: "Galway City, Co. Galway",
      price: 249, duration: "2 nights", season: "All year",
      description: "Discover colourful lanes, street musicians and local food in Galway's Latin Quarter.",
      included: ["Two nights in a guesthouse", "Local food walk", "Traditional music evening"]
    },
    {
      id: "belfast", category: "city", image: "belfast",
      title: "Belfast Titanic & Murals",
      location: "Belfast, Northern Ireland",
      price: 319, duration: "3 days", season: "All year",
      description: "Discover maritime heritage, city murals and the lively Cathedral Quarter.",
      included: ["Two nights in a hotel", "Maritime museum visit", "Guided mural tour"]
    },
    {
      id: "moher", category: "coastal", image: "moher",
      title: "Cliffs of Moher Coastal Walk",
      location: "Doolin, Co. Clare",
      price: 79, duration: "1 day", season: "April – October",
      description: "Explore Atlantic scenery with a local walking guide and a relaxed lunch stop.",
      included: ["Local walking guide", "Packed lunch", "Local transfers"]
    },
    {
      id: "wild-atlantic", category: "coastal", image: "wildatlantic",
      title: "Wild Atlantic Way Road Trip",
      location: "Donegal to Kerry",
      price: 1190, duration: "7 days", season: "May – September",
      description: "Follow a self-guided coastal route through beaches, villages and Atlantic landscapes.",
      included: ["Six nights accommodation", "Personalised route notes", "Daily breakfast"]
    },
    {
      id: "causeway", category: "coastal", image: "causeway",
      title: "Giant's Causeway & Coast",
      location: "Causeway Coast, Northern Ireland",
      price: 259, duration: "2 days", season: "April – October",
      description: "Explore striking coastal scenery and seaside villages over two relaxed days.",
      included: ["One night accommodation", "Guided coastal outing", "Local transfers"]
    },
    {
      id: "dingle", category: "coastal", image: "dingle",
      title: "Dingle Peninsula Discovery",
      location: "Dingle, Co. Kerry",
      price: 349, duration: "3 days", season: "April – October",
      description: "Discover coastal roads, quiet beaches and the food and music of the peninsula.",
      included: ["Two nights in a guesthouse", "Peninsula tour", "Local tasting experience"]
    },
    {
      id: "connemara", category: "countryside", image: "connemara",
      title: "Connemara Cottage Escape",
      location: "Connemara, Co. Galway",
      price: 549, duration: "4 nights", season: "March – November",
      description: "Slow down in a countryside cottage with mountain views and nearby walking routes.",
      included: ["Four nights in a cottage", "Walking route pack", "Local welcome hamper"]
    },
    {
      id: "kerry", category: "countryside", image: "kerry",
      title: "Kerry Lakes & Mountain Retreat",
      location: "Killarney, Co. Kerry",
      price: 429, duration: "3 nights", season: "April – October",
      description: "Enjoy lakeside walks, mountain scenery and unhurried countryside evenings.",
      included: ["Three nights accommodation", "Guided nature walk", "Daily breakfast"]
    },
    {
      id: "wicklow", category: "countryside", image: "glendalough",
      title: "Wicklow Woodland Weekend",
      location: "Glendalough, Co. Wicklow",
      price: 229, duration: "2 nights", season: "March – November",
      description: "Escape to woodland paths and lakeside scenery with time to explore at your own pace.",
      included: ["Two nights accommodation", "Walking route pack", "Picnic lunch"]
    },
    {
      id: "lough-key", category: "family", image: "loughkey",
      title: "Lough Key Family Adventure",
      location: "Boyle, Co. Roscommon",
      price: 159, duration: "2 days", season: "April – October",
      description: "Bring the family together for woodland exploration and lakeside activities.",
      included: ["One night accommodation", "Family activity session", "Picnic pack"]
    },
    {
      id: "cork-family", category: "family", image: "familycork",
      title: "Cork Family Discovery",
      location: "Cork, Co. Cork",
      price: 199, duration: "2 days", season: "All year",
      description: "Enjoy easy-paced sightseeing and activities for curious younger travellers.",
      included: ["One night accommodation", "Family activity tickets", "Local discovery trail"]
    },
    {
      id: "burren", category: "family", image: "burren",
      title: "Burren Nature Explorers",
      location: "The Burren, Co. Clare",
      price: 89, duration: "1 day", season: "April – September",
      description: "Explore unusual landscapes through a family-friendly nature walk and discovery challenge.",
      included: ["Guided nature walk", "Children's discovery pack", "Packed lunch"]
    },
    {
      id: "kilkenny", category: "cultural", image: "kilkenny",
      title: "Kilkenny Medieval Stories",
      location: "Kilkenny City, Co. Kilkenny",
      price: 189, duration: "2 days", season: "All year",
      description: "Follow medieval lanes and discover local crafts and the city's food scene.",
      included: ["One night accommodation", "Heritage walk", "Craft workshop"]
    },
    {
      id: "cork-food", category: "cultural", image: "cork",
      title: "Cork Food & Market Trail",
      location: "Cork City, Co. Cork",
      price: 99, duration: "1 day", season: "All year",
      description: "Explore Cork's market culture and meet local producers on a guided tasting trail.",
      included: ["Local food guide", "Tasting stops", "Market discovery walk"]
    },
    {
      id: "newgrange", category: "cultural", image: "newgrange",
      title: "Newgrange & Boyne Valley",
      location: "Boyne Valley, Co. Meath",
      price: 119, duration: "1 day", season: "All year",
      description: "Discover ancient heritage through a planned day of guided visits and storytelling.",
      included: ["Heritage visit", "Local guide", "Return transfers"]
    },
    {
      id: "aran", category: "cultural", image: "aran",
      title: "Aran Islands Trad & Cycling",
      location: "Inis Mór, Co. Galway",
      price: 299, duration: "2 days", season: "April – October",
      description: "Explore island lanes by bicycle and enjoy an evening of traditional music.",
      included: ["Return ferry", "Bike hire", "Island B&B and music evening"]
    }
  ];

  const filters = document.getElementById("experience-filters");
  const priceFilter = document.getElementById("price-filter");
  const sortFilter = document.getElementById("sort-filter");
  const savedFilter = document.getElementById("saved-filter");
  const results = document.getElementById("experience-results");
  const empty = document.getElementById("experiences-empty");
  const announcement = document.getElementById("trip-announcement");

  const compareButton = document.getElementById("compare-experiences");
  const compareCount = document.getElementById("compare-count");
  const compareBody = document.getElementById("compare-body");

  const modalElement = document.getElementById("experience-modal");
  const compareElement = document.getElementById("compare-modal");
  const travellers = document.getElementById("trip-travellers");
  const modalSave = document.getElementById("trip-save");

  const selected = new Set();
  const storageKey = "ee-favourites";
  let favourites = new Set();
  let currentTrip = null;
  let detailsModal;
  let comparisonModal;

  const money = new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  });

  const categoryNames = {
    city: "City break",
    coastal: "Coastal",
    countryside: "Countryside",
    family: "Family",
    cultural: "Cultural"
  };

  // Escape text before inserting it into card HTML.
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");

    if (Array.isArray(stored)) {
      favourites = new Set(
        stored.filter((id) => trips.some((trip) => trip.id === id))
      );
    }
  } catch {
    // Favourites still work in memory when storage is unavailable.
  }

  function updateFavouriteCount() {
    document.querySelectorAll(".fav-count").forEach((element) => {
      element.textContent = favourites.size;
    });
  }

  function updateModalSave() {
    if (!currentTrip) return;

    const saved = favourites.has(currentTrip.id);
    modalSave.setAttribute("aria-pressed", String(saved));
    modalSave.textContent = saved
      ? "Remove from favourites"
      : "Save to favourites";
  }

  function toggleFavourite(id) {
    if (favourites.has(id)) favourites.delete(id);
    else favourites.add(id);

    try {
      localStorage.setItem(storageKey, JSON.stringify([...favourites]));
    } catch {
      // Keep using the in-memory selection.
    }

    updateFavouriteCount();
    updateModalSave();
  }

  function cardMarkup(trip) {
    const saved = favourites.has(trip.id);
    const title = escapeHTML(trip.title);

    return `
    <div class="col-md-6 col-xl-4">
      <article class="trip-card card h-100 rounded-4 overflow-hidden
        border border-light border-opacity-10">

        <div class="trip-card-media position-relative overflow-hidden">
          <img class="trip-card-image card-img-top d-block w-100"
            src="images/${trip.image}.jpg" alt="" loading="lazy">

          <span class="badge rounded-pill text-bg-light
            position-absolute top-0 start-0 m-3 z-2">
            ${categoryNames[trip.category]}
          </span>

          <button class="trip-save-button btn btn-light rounded-circle
            position-absolute top-0 end-0 m-3 z-3"
            type="button" data-save="${trip.id}"
            aria-label="${saved ? "Unsave" : "Save"} ${title}"
            aria-pressed="${saved}">
            <i class="fa-solid fa-heart
              ${saved ? "text-danger" : "text-secondary"}"
              aria-hidden="true"></i>
          </button>

          <span class="trip-quick-view badge rounded-pill px-4 py-3
            position-absolute bottom-0 start-50 translate-middle-x mb-3 z-2"
            aria-hidden="true">
            Quick view
          </span>
        </div>

        <div class="card-body p-4 d-flex flex-column">
          <p class="trip-location small mb-3">
            <i class="fa-solid fa-location-dot me-1" aria-hidden="true"></i>
            ${escapeHTML(trip.location)}
          </p>

          <h3 class="trip-card-title">${title}</h3>

          <p class="experiences-intro mb-4">
            ${escapeHTML(trip.description)}
          </p>

          <div class="d-flex justify-content-between align-items-end
            border-top border-light border-opacity-10 pt-3 mt-auto">
            <span class="small">
              <i class="fa-regular fa-clock me-1" aria-hidden="true"></i>
              ${trip.duration}
            </span>

            <div class="text-end">
              <span class="small text-uppercase d-block">From</span>
              <span class="trip-price fs-2">${money.format(trip.price)}</span>
            </div>
          </div>

          <button class="btn btn-link text-light text-start
            text-decoration-none fw-semibold p-0 mt-4 stretched-link"
            type="button" data-details="${trip.id}">
            View details →
            <span class="visually-hidden">${title}</span>
          </button>

          <div class="form-check position-relative z-3 mt-3">
            <input class="form-check-input" type="checkbox"
              id="compare-${trip.id}" data-compare="${trip.id}"
              ${selected.has(trip.id) ? "checked" : ""}>
            <label class="form-check-label small" for="compare-${trip.id}">
              Compare this trip
            </label>
          </div>
        </div>

      </article>
    </div>
  `;
  }

  function renderTrips() {
    const category =
      filters.querySelector('input[name="category"]:checked')?.value || "all";

    const maximum = priceFilter.value;

    const visible = trips.filter((trip) => (
      (category === "all" || trip.category === category) &&
      (maximum === "all" || trip.price <= Number(maximum)) &&
      (!savedFilter.checked || favourites.has(trip.id))
    ));

    if (sortFilter.value === "price-low") {
      visible.sort((a, b) => a.price - b.price);
    } else if (sortFilter.value === "price-high") {
      visible.sort((a, b) => b.price - a.price);
    } else if (sortFilter.value === "name") {
      visible.sort((a, b) => a.title.localeCompare(b.title));
    }

    grid.innerHTML = visible.map(cardMarkup).join("");
    results.textContent =
      `${visible.length} experience${visible.length === 1 ? "" : "s"} found`;

    empty.classList.toggle("d-none", visible.length > 0);

    if (visible.length === 0) {
      let text = "No experiences match your filters.";

      if (savedFilter.checked) {
        text = favourites.size === 0
          ? "You haven't saved any experiences as favourites yet."
          : "None of your saved experiences match these filters.";
      }

      document.getElementById("empty-message").textContent = text;
    }
  }

  function updateEstimate() {
    if (!currentTrip) return;

    const number = travellers.valueAsNumber;
    const total = document.getElementById("trip-total");
    const enquiryLink = document.getElementById("trip-enquire");

    if (
      !travellers.value ||
      !travellers.validity.valid ||
      !Number.isInteger(number)
    ) {
      total.textContent = "Choose 1–20 travellers";
      enquiryLink.removeAttribute("href");
      enquiryLink.setAttribute("aria-disabled", "true");
      return;
    }

    total.textContent = money.format(currentTrip.price * number);

    const parameters = new URLSearchParams({
      trip: currentTrip.title,
      location: currentTrip.location,
      travellers: String(number)
    });

    enquiryLink.href =
      `contact.html?${parameters.toString()}#booking-content`;

    enquiryLink.removeAttribute("aria-disabled");
  }

  function openDetails(id, trigger) {
    if (!detailsModal) {
      announcement.textContent =
        "Details could not open. Check that Bootstrap loaded.";
      return;
    }

    currentTrip = trips.find((trip) => trip.id === id);
    if (!currentTrip) return;

    const values = {
      "trip-title": currentTrip.title,
      "trip-location": currentTrip.location,
      "trip-description": currentTrip.description,
      "trip-duration": currentTrip.duration,
      "trip-season": currentTrip.season,
      "trip-price": `${money.format(currentTrip.price)} per person`,
      "trip-category":
        `${categoryNames[currentTrip.category]} · ${currentTrip.duration}`
    };

    Object.entries(values).forEach(([elementId, value]) => {
      document.getElementById(elementId).textContent = value;
    });

    const image = document.getElementById("trip-image");
    image.src = `images/${currentTrip.image}.jpg`;
    image.alt = currentTrip.title;

    const included = document.getElementById("trip-included");
    included.replaceChildren();

    currentTrip.included.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `✓ ${item}`;
      included.append(li);
    });

    travellers.value = "2";
    updateEstimate();
    updateModalSave();
    detailsModal.show(trigger);
  }

  grid.addEventListener("click", (event) => {
    const save = event.target.closest("[data-save]");
    const details = event.target.closest("[data-details]");

    if (save) {
      const id = save.dataset.save;
      toggleFavourite(id);
      renderTrips();

      const replacement = grid.querySelector(`[data-save="${id}"]`);

      if (replacement) replacement.focus();
      else savedFilter.focus();

    } else if (details) {
      openDetails(details.dataset.details, details);
    }
  });

  grid.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-compare]");
    if (!checkbox) return;

    const id = checkbox.dataset.compare;

    if (checkbox.checked && selected.size >= 3) {
      checkbox.checked = false;
      announcement.textContent = "You can compare up to three trips.";
      return;
    }

    if (checkbox.checked) selected.add(id);
    else selected.delete(id);

    compareCount.textContent = selected.size;
    compareButton.disabled = selected.size < 2;
  });

  compareButton.addEventListener("click", () => {
    if (!comparisonModal || selected.size < 2) return;

    compareBody.replaceChildren();

    trips.filter((trip) => selected.has(trip.id)).forEach((trip) => {
      const row = document.createElement("tr");

      [trip.title, trip.duration, money.format(trip.price)].forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.append(cell);
      });

      compareBody.append(row);
    });

    comparisonModal.show(compareButton);
  });

  modalSave.addEventListener("click", () => {
    if (!currentTrip) return;
    toggleFavourite(currentTrip.id);
    renderTrips();
  });

  travellers.addEventListener("input", updateEstimate);

  modalElement.addEventListener("hidden.bs.modal", () => {
    const button = grid.querySelector(
      `[data-details="${currentTrip?.id}"]`
    );

    if (button) button.focus();
    else savedFilter.focus();
  });

  compareElement.addEventListener("hidden.bs.modal", () => {
    compareButton.focus();
  });

  filters.addEventListener("submit", (event) => event.preventDefault());
  filters.addEventListener("change", renderTrips);

  filters.addEventListener("reset", () => {
    selected.clear();
    compareCount.textContent = "0";
    compareButton.disabled = true;
    announcement.textContent = "";

    // Render after the browser resets the form controls.
    setTimeout(renderTrips, 0);
  });

  document.getElementById("navbar-saved").addEventListener("click", () => {
    // Show all saved trips without other filters restricting the results.
    document.getElementById("category-all").checked = true;
    priceFilter.value = "all";
    savedFilter.checked = true;
    renderTrips();
  });

  // Match the sticky filter position to the actual navbar height.
  const header = document.querySelector(".site-header");

  function measureHeader() {
    document.documentElement.style.setProperty(
      "--navbar-height",
      `${header.getBoundingClientRect().height}px`
    );
  }

  if (header) {
    measureHeader();

    if ("ResizeObserver" in window) {
      new ResizeObserver(measureHeader).observe(header);
    } else {
      window.addEventListener("resize", measureHeader);
    }
  }

  // Start with all 17 trips, even if the browser restores old form values.
  filters.reset();
  updateFavouriteCount();
  renderTrips();

  // Initialize modals after the cards have rendered.
  if (window.bootstrap?.Modal) {
    detailsModal = bootstrap.Modal.getOrCreateInstance(modalElement);
    comparisonModal = bootstrap.Modal.getOrCreateInstance(compareElement);
  } else {
    console.error("Bootstrap did not load. Cards work, but modals require it.");
  }

  document.getElementById("browse-all-experiences")
  .addEventListener("click", () => {
    filters.reset();

    const url = new URL(window.location.href);
    url.searchParams.delete("saved");
    history.replaceState(null, "", url.href);

    document.getElementById("category-all").focus();
  });
  
})();