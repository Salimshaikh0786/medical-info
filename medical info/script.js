
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("message").textContent =
    "Thank you! Your form has been filled successfully. Connect a backend to receive messages.";

  this.reset();
});
