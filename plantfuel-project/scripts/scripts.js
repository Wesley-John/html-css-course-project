document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscription-form");
  const emailInput = document.getElementById("email-input");
  const message = document.getElementById("subscription-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
      message.textContent = "Please enter a valid email.";
      message.style.color = "red";
    } else {
      message.textContent = `Thanks for signing up, ${email}! 🎉`;
      message.style.color = "#2e7d32";
      emailInput.value = "";
    }
  });
});