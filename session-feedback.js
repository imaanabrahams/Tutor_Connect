document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.getElementById("sessionFeedbackForm");
  const stars = document.querySelectorAll(".star-rating-inputs label");

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const ratingGroup = star.closest(".rating-group");
      if (ratingGroup) {
        ratingGroup.classList.remove("field-invalid");
        const oldError = ratingGroup.querySelector(".error-message-text");
        if (oldError) oldError.remove();
      }
    });
  });

  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isFormValid = true;

    const starChecked = document.querySelector(
      'input[name="starRating"]:checked',
    );
    const ratingGroup = document.querySelector(".rating-group");

    if (!starChecked) {
      isFormValid = false;
      showFeedbackError(ratingGroup, "Please click a star level score rating.");
    } else {
      clearFeedbackError(ratingGroup);
    }

    const punctualChecked = document.querySelector(
      'input[name="isPunctual"]:checked',
    );
    const toggleGroup = document.querySelector(".status-toggles");

    if (!punctualChecked) {
      isFormValid = false;
      showFeedbackError(
        toggleGroup,
        "Please select an arrival timeliness toggle choice.",
      );
    } else {
      clearFeedbackError(toggleGroup);
    }

    const reviewText = document.getElementById("publicReview");
    const textContainer = reviewText.closest(".input-container");

    if (!reviewText.value.trim()) {
      isFormValid = false;
      showFeedbackError(
        textContainer,
        "A short descriptive profile review comment is required.",
      );
    } else {
      clearFeedbackError(textContainer);
    }

    if (isFormValid) {
      const dataPackage = new FormData(feedbackForm);
      const compiledJSON = Object.fromEntries(dataPackage.entries());

      console.log("📬 Feedback Processed Package Data:", compiledJSON);
      alert("Thank you! Your anonymous quality assessment has been logged.");

      feedbackForm.reset();
    }
  });

  function showFeedbackError(targetBox, messageString) {
    targetBox.classList.add("field-invalid");
    let msgNode = targetBox.querySelector(".error-message-text");

    if (!msgNode) {
      msgNode = document.createElement("span");
      msgNode.className = "error-message-text";
      targetBox.appendChild(msgNode);
    }
    msgNode.textContent = messageString;
    msgNode.style.display = "block";
  }

  function clearFeedbackError(targetBox) {
    targetBox.classList.remove("field-invalid");
    const msgNode = targetBox.querySelector(".error-message-text");
    if (msgNode) msgNode.style.display = "none";
  }
});
