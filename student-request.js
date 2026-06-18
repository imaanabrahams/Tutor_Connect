document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("studentBookingForm");
  const serviceCards = document.querySelectorAll(
    '.services-3col-grid input[type="radio"]',
  );

  serviceCards.forEach((input) => {
    input.addEventListener("change", (e) => {
      const serviceWrapper = e.target.closest(".form-section-block");
      if (serviceWrapper) {
        serviceWrapper.classList.remove("field-invalid");
        const errors = serviceWrapper.querySelectorAll(".error-message-text");
        errors.forEach((err) => err.remove());
      }
    });
  });

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault(); //
    let formIsValid = true;

    const selectedService = document.querySelector(
      'input[name="requestedSubject"]:checked',
    );
    const serviceSection = document
      .querySelector(".services-3col-grid")
      .closest(".form-section-block");

    if (!selectedService) {
      formIsValid = false;
      showCustomError(
        serviceSection,
        "Please select one of our available services.",
      );
    }

    const selectedTime = document.querySelector(
      'input[name="selectedTimeSlot"]:checked',
    );
    const timeSection = document.querySelector(".nested-live-booking-module");

    if (!selectedTime) {
      formIsValid = false;
      showCustomError(
        timeSection,
        "Please select an available appointment time slot.",
      );
    }

    const standardInputs = bookingForm.querySelectorAll("input[required]");
    standardInputs.forEach((input) => {
      const container = input.closest(".input-container");
      if (!input.checkValidity()) {
        formIsValid = false;
        if (container)
          showCustomError(
            container,
            input.validationMessage || "This field is required.",
          );
      } else if (container) {
        clearError(container);
      }
    });

    if (formIsValid) {
      const formData = new FormData(bookingForm);
      const payload = Object.fromEntries(formData.entries());

      console.log("🚀 Booking Form Submission Payload:", payload);
      alert(
        `🎉 Success! Booking reserved for ${payload.requestedSubject} on ${payload.selectedDate} at ${payload.selectedTimeSlot}.`,
      );

      bookingForm.reset();
    }
  });

  function showCustomError(wrapperElement, errorMessage) {
    wrapperElement.classList.add("field-invalid");
    let errorText = wrapperElement.querySelector(".error-message-text");

    if (!errorText) {
      errorText = document.createElement("span");
      errorText.className = "error-message-text";
      wrapperElement.appendChild(errorText);
    }
    errorText.textContent = errorMessage;
    errorText.style.display = "block";
  }

  function clearError(wrapperElement) {
    wrapperElement.classList.remove("field-invalid");
    const errorText = wrapperElement.querySelector(".error-message-text");
    if (errorText) errorText.style.display = "none";
  }
});
