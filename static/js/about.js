document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".skill-card");

  cards.forEach(card => {
    const fill = card.querySelector(".skill-fill");
    const percentText = card.querySelector(".skill-percent");
    const targetWidth = fill.getAttribute("data-width");
    let count = 0;
    let target = parseInt(targetWidth);

    // Animate bar
    setTimeout(() => {
      fill.style.width = targetWidth;
    }, 200);

    // Animate percentage text
    const interval = setInterval(() => {
      if (count < target) {
        count++;
        percentText.textContent = count + "%";
      } else {
        clearInterval(interval);
      }
    }, 20);
  });
});
