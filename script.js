const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// 1. Afficher ou masquer le bouton selon le défilement
window.addEventListener("scroll", () => {
  // Si on a défilé de plus de 300px vers le bas
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// 2. Remonter en haut au clic avec un effet fluide
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // C'est cette propriété qui crée l'effet de remontée douce
  });
});
