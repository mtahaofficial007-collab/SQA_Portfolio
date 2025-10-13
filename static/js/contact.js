// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqCard = button.parentElement;
    faqCard.classList.toggle("active");
  });
});

//Flash Message Auto Fade
  document.addEventListener("DOMContentLoaded", () => {
    const alertBox = document.querySelector(".flash-container");
    if (alertBox) {
      setTimeout(() => {
        alertBox.style.transition = "opacity 0.6s ease";
        alertBox.style.opacity = "0";
        setTimeout(() => alertBox.remove(), 600);
      }, 4000); // disappears after 4s
    }
  });
