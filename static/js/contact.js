// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqCard = button.parentElement;
    faqCard.classList.toggle("active");
  });
});
