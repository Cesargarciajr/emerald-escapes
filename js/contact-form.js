(() => {
  const form = document.getElementById("booking-form");
  if (!form) return;

  const content = document.getElementById("booking-content");
  const success = document.getElementById("booking-success");
  const successHeading = document.getElementById("booking-success-heading");
  const successMessage = document.getElementById("booking-success-message");
  const another = document.getElementById("booking-another");

  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const queryType = document.getElementById("query-type");
  const message = document.getElementById("message");
  const count = document.getElementById("message-count");
  const submit = form.querySelector('button[type="submit"]');

  const fields = [fullName, email, phone, queryType, message];
  const feedback = new Map();
  let submitted = false;

  // Create a Bootstrap error summary.
  const summary = document.createElement("div");
  summary.className = "alert alert-danger d-none";
  summary.setAttribute("role", "alert");
  form.prepend(summary);

  // Create an error message underneath each field.
  fields.forEach((field) => {
    const error = document.createElement("div");
    error.id = `${field.id}-error`;
    error.className = "invalid-feedback";
    field.after(error);
    feedback.set(field, error);

    // Preserve existing descriptions, such as the character counter.
    const descriptions = field.getAttribute("aria-describedby") || "";
    field.setAttribute(
      "aria-describedby",
      `${descriptions} ${error.id}`.trim()
    );
  });

  function getError(field) {
    const value = field.value.trim();

    if (!value) {
      const requiredMessages = {
        "full-name": "Please enter your full name.",
        email: "Please enter your email address.",
        phone: "Please enter your phone number.",
        "query-type": "Please choose a query type.",
        message: "Please enter your message."
      };

      return requiredMessages[field.id];
    }

    if (field === email && field.validity.typeMismatch) {
      return "Please enter a valid email address, such as you@example.com.";
    }

    if (field === phone) {
      const digits = value.replace(/\D/g, "");

      if (
        !/^\+?[\d\s().-]+$/.test(value) ||
        digits.length < 7 ||
        digits.length > 15
      ) {
        return "Enter a phone number with 7–15 digits. Spaces, brackets and a leading + are allowed.";
      }
    }

    if (field === message && value.length < 20) {
      return "Your message must contain at least 20 characters.";
    }

    // Check any other native constraints, including maximum length.
    return field.validity.valid ? "" : field.validationMessage;
  }

  function validateField(field) {
    // Clear the previous custom error before checking native validity.
    field.setCustomValidity("");

    const error = getError(field);
    field.setCustomValidity(error);
    field.classList.toggle("is-invalid", Boolean(error));
    field.setAttribute("aria-invalid", String(Boolean(error)));
    feedback.get(field).textContent = error;

    return !error;
  }

  function updateSummary() {
    const invalidFields = fields.filter(
      (field) => field.classList.contains("is-invalid")
    );

    summary.classList.toggle("d-none", invalidFields.length === 0);

    if (invalidFields.length) {
      const names = invalidFields.map((field) =>
        field.labels[0].textContent.replace("*", "").trim()
      );

      summary.textContent = `Please check these fields: ${names.join(", ")}.`;
    }
  }

  function handleEdit(event) {
    count.textContent = message.value.length;

    if (submitted && fields.includes(event.target)) {
      validateField(event.target);
      updateSummary();
    }
  }

  form.addEventListener("input", handleEdit);
  form.addEventListener("change", handleEdit);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitted = true;

    // Validate every field, rather than stopping at the first error.
    const results = fields.map(validateField);
    updateSummary();

    if (results.includes(false)) {
      fields.find((field) =>
        field.classList.contains("is-invalid")
      ).focus();

      return;
    }

    const selectedQuery =
      queryType.selectedOptions[0].textContent.toLowerCase();

    successMessage.textContent =
      `Thanks, ${fullName.value.trim()} — your ${selectedQuery} enquiry ` +
      `passed validation using ${email.value.trim()}`

    content.classList.add("d-none");
    success.classList.remove("d-none");
    successHeading.focus();
  });

  another.addEventListener("click", () => {
    form.reset();
    submitted = false;
    count.textContent = "0";
    summary.classList.add("d-none");

    fields.forEach((field) => {
      field.setCustomValidity("");
      field.classList.remove("is-invalid");
      field.removeAttribute("aria-invalid");
      feedback.get(field).textContent = "";
    });

    success.classList.add("d-none");
    content.classList.remove("d-none");
    fullName.focus();
  });

  // Run once when the contact page loads.
  const parameters = new URLSearchParams(window.location.search);
  const selectedTrip = parameters.get("trip");

  if (selectedTrip && !message.value.trim()) {
    const title = selectedTrip.trim().slice(0, 200);
    const location = (parameters.get("location") || "").trim().slice(0, 200);
    const requestedTravellers = Number(parameters.get("travellers"));

    const travellerCount =
      Number.isInteger(requestedTravellers) &&
        requestedTravellers >= 1 &&
        requestedTravellers <= 20
        ? requestedTravellers
        : 2;

    queryType.value = "booking";

    message.value =
      `Hi, I'd like to book "${title}"` +
      (location ? ` (${location})` : "") +
      ` for ${travellerCount} traveller${travellerCount === 1 ? "" : "s"}. ` +
      "My preferred dates are: ";
  }

  count.textContent = message.value.length;
  submit.disabled = false;

})();