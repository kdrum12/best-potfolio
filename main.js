// ===== Greeting Based on Time =====
const greetingElement = document.getElementById("greeting");
const hours = new Date().getHours();
let greetingText = "Hello";

if (hours < 12) {
  greetingText = "Good Morning, I am Oche Godwin Victor";
} else if (hours < 18) {
  greetingText = "Good Afternoon, I am Oche Godwin Victor";
} else {
  greetingText = "Good Evening, I am Oche Godwin Victor";
}

greetingElement.textContent = greetingText;

// ===== Typing Effect =====
const typingElement = document.querySelector(".typing");
const roles = ["UI/UX Designer", "Frontend Developer", "PC & Mobile Optimizer"];
let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    // Close mobile menu after click
    navLinks.classList.remove("active");
  });
});

// ===== Highlight Active Section =====
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70; // adjust for navbar height
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== Dynamic Code Background =====
const codeBackground = document.querySelector(".code-background");

if (codeBackground) {
  const snippets = [
    "console.log('Hello World');",
    "function greet(name){ return `Hello ${name}`; }",
    "<div class='portfolio'>Oche Godwin Victor</div>",
    "if(user === 'Oche'){ inspire(); }",
    "public class Portfolio { }",
    "while(true){ code++; }",
    "const skills = ['UI/UX','Frontend','Optimization'];"
  ];

  function generateCodeLines() {
    let lines = "";
    for (let i = 0; i < 40; i++) {
      const random = snippets[Math.floor(Math.random() * snippets.length)];
      lines += random + "\n";
    }
    codeBackground.textContent = lines;
  }

  // Refresh background every few seconds
  generateCodeLines();
  setInterval(generateCodeLines, 8000);
}
