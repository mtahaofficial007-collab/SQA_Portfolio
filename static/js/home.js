
const roles = [
  "Muhammad Taha Khurram",
  "Quality Assurance Engineer",
  "Manual Testing Engineer",
  "Automation Engineer"
];

const typingText = document.querySelector(".typing-text");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  typingText.textContent = currentRole.substring(0, charIndex);

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(typeEffect, 120); // typing speed
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60); // deleting speed
  } else {
    if (!isDeleting) {
      // pause after typing
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 2000);
    } else {
      // move to next role
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 500);
    }
  }
}

typeEffect();

