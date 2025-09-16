// Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Dark mode toggle
    const darkToggle = document.getElementById("dark-toggle");
    const htmlElement = document.documentElement;

    darkToggle.addEventListener("click", () => {
      htmlElement.classList.toggle("dark");
      // Optionally change icon
      darkToggle.textContent = htmlElement.classList.contains("dark") ? "☀️" : "🌙";
    });

//Product Stars
document.querySelectorAll(".stars").forEach(starContainer => {
  const stars = starContainer.textContent.trim().split("");
  starContainer.innerHTML = "";

  stars.forEach((star, index) => {
    const span = document.createElement("span");
    span.textContent = "★";
    span.dataset.index = index + 1;

    span.addEventListener("click", () => {
      const rating = span.dataset.index;
      starContainer.dataset.rating = rating;
      updateStars(starContainer, rating);
    });

    starContainer.appendChild(span);
  });

  function updateStars(container, rating) {
    [...container.children].forEach((star, i) => {
      star.classList.toggle("active", i < rating);
    });
  }
}); 

// Back To Top Btn
const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.remove("hidden");
    } else {
      backToTop.classList.add("hidden");
    }
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
var amount = 50 / 5