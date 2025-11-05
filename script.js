document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burgerMenu");
  const nav = document.querySelector("nav ul");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  const dropdown = document.querySelector(".dropdown");
  const dropbtn = dropdown.querySelector(".dropbtn");

  dropbtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("open");
  });
});


//Menu Scroll fixe
document.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar')
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled")
  }
  else {
    navbar.classList.remove("scrolled")
  }
})

  // bouton retour en haut 
  (function () {
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
          $('#scrollUp').css('right', '10px');
        } else {
          $('#scrollUp').removeAttr('style');
        }
      });
    });
  });



// Carrousel d'image 
const initUsageSlider = () => {
  const slideButtons = document.querySelectorAll(".usage__slider-wrapper .usage__button");
  const imageList = document.querySelector(".usage__slider-wrapper .usage__image-list");

  // Fonction pour déplacer les slides
  const moveSlide = (direction = 1) => {
    if (!imageList) return;
    const scrollAmount = imageList.clientWidth * direction;
    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Gestion des clics sur les boutons
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.classList.contains("usage__button--prev") ? -1 : 1;
      moveSlide(direction);
    });
  });

  // Défilement automatique toutes les 3s
  setInterval(() => {
    moveSlide(1);
  }, 3000);
};

window.addEventListener("load", initUsageSlider);

