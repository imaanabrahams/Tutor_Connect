document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("studentBookingForm");
  const nextButtons = document.querySelectorAll(".btn-next");
  const prevButtons = document.querySelectorAll(".btn-back");

  nextButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentStep = btn.closest(".form-step");
      const nextStepId = btn.getAttribute("data-next");
      const nextStep = document.getElementById(nextStepId);

      if (validateStepInputs(currentStep)) {
        currentStep.classList.remove("step-visible");
        nextStep.classList.add("step-visible");
        updateProgressBadges(nextStepId);
      }
    });
  });

  prevButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentStep = btn.closest(".form-step");
      const prevStepId = btn.getAttribute("data-prev");
      const prevStep = document.getElementById(prevStepId);

      currentStep.classList.remove("step-visible");
      prevStep.classList.add("step-visible");
      updateProgressBadges(prevStepId);
    });
  });

  function updateProgressBadges(stepId) {
    const currentStepNum = parseInt(stepId.replace(/^\D+/g, ""), 10);

    document.querySelectorAll(".wizard-step").forEach((badge, idx) => {
      if (idx + 1 <= currentStepNum) {
        badge.classList.add("active");
      } else {
        badge.classList.remove("active");
      }
    });
  }

  function validateStepInputs(stepContainer) {
    let stepIsValid = true;
    const items = stepContainer.querySelectorAll(
      "input[required], select[required]",
    );

    items.forEach((input) => {
      const container = input.closest(".input-container");
      if (container) {
        container.classList.remove("field-invalid");

        if (!input.checkValidity()) {
          stepIsValid = false;
          container.classList.add("field-invalid");

          let errLabel = container.querySelector(".error-message-text");
          if (!errLabel) {
            errLabel = document.createElement("span");
            errLabel.className = "error-message-text";
            container.appendChild(errLabel);
          }
          errLabel.textContent =
            input.validationMessage || "This field is required.";
        }
      }
    });
    return stepIsValid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const finalStep = document.getElementById("studentStep3");

    if (validateStepInputs(finalStep)) {
      const rawData = new FormData(form);
      const dataPayload = Object.fromEntries(rawData.entries());

      console.log("🚀 Real Web Payload Consolidated Package:", dataPayload);
      alert(
        `Success! We are matching you with an expert tutor for ${dataPayload.requestedSubject}!`,
      );
      form.reset();

      document.getElementById("studentStep3").classList.remove("step-visible");
      document.getElementById("studentStep1").classList.add("step-visible");
      updateProgressBadges("studentStep1");
    }
  });
});
