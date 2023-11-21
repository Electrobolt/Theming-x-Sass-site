document.addEventListener("DOMContentLoaded", function() {
  var SizeButtons = document.querySelectorAll(".header--size-button");

  SizeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var size = getComputedStyle(this).getPropertyValue("--size");

      SizeButtons.forEach(function(btn) {
        btn.classList.remove("choose");
      });
      this.classList.add("choose");

      document.body.style.setProperty("--size", size);

      // Stockage des couleurs du thème sélectionné
      localStorage.setItem("size", size);
    });
  });

  // Récupération de la taille lors du chargement de la page
  var Storedsize = localStorage.getItem("size");

  if (Storedsize) {
    document.body.style.setProperty("--size", Storedsize);

    var chooseButton = document.querySelector(".header--size-button.choose");
    if (chooseButton) {
      chooseButton.classList.remove("choose");
    }

    // Sélection du bouton correspondant à la taille précédemment sélectionné
    SizeButtons.forEach(function(button) {
      var size = getComputedStyle(button).getPropertyValue("--size");

      if (size === Storedsize) {
        button.classList.add("choose");
      }
    });
  }
});