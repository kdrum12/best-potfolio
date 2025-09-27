// Greeting based on time
const greetingElement = document.getElementById("greeting");
const hours = new Date().getHours();
let greetingText = "Hello";

if (hours < 12) {
  greetingText = "Good Morning";
} else if (hours < 18) {
  greetingText = "Good Afternoon";
} else {
  greetingText = "Good Evening";
}
greetingElement.textContent = `${greetingText}, I'm Oche Godwin Victor`;

// Typewriter effect
const typingElement = document.querySelector(".typing");
const skills = [
  "a Software Developer",
  "a UI/UX Designer",
  "a JavaScript Enthusiast",
  "skilled in boosting low-spec PCs and Mobile Phones"
];
let skillIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < skills[skillIndex].length) {
    typingElement.textContent += skills[skillIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = skills[skillIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    skillIndex = (skillIndex + 1) % skills.length;
    setTimeout(typeEffect, 400);
  }
}

// Start typing after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    typeEffect();
  }, 1200);
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
