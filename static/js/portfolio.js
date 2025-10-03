document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalImage = document.getElementById("modal-image");
    const modalTags = document.getElementById("modal-tags");
    const modalLink = document.getElementById("modal-link");
    const closeBtn = document.querySelector(".modal .close");

    // Open modal
    document.querySelectorAll(".project-details").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const card = btn.closest(".project-card");

            if (!card) return;

            modalTitle.textContent = card.querySelector("h3").textContent;
            modalDesc.textContent = card.querySelector(".project-desc").textContent;
            modalImage.src = card.querySelector(".project-image").src;
            modalTags.innerHTML = card.querySelector(".project-tags").innerHTML;
            modalLink.href = "#"; // Replace with actual project link

            modal.style.display = "block";
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
});
