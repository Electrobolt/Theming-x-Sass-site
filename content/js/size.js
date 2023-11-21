document.addEventListener("DOMContentLoaded", function() {

        // Sélectionnez l'élément select
    var SizeSelect = document.querySelector(".header-size");

    // Ajoutez un écouteur d'événements pour le changement de sélection
    SizeSelect.addEventListener("click", function() {
      // Obtenez la taille de l'option sélectionnée
      var size = this.options[this.selectedIndex].style.getPropertyValue("--size");

      // Mettez à jour la taille du corps du document
      document.body.style.setProperty("--size-here", size);

      // Stockez la taille dans le stockage local
      localStorage.setItem("size", size);
    });

    // Récupération de la taille lors du chargement de la page
      var storedSize = localStorage.getItem("size");

      for (var i = 0; i < SizeSelect.options.length; i++) {
        var option = SizeSelect.options[i];
        var size = option.style.getPropertyValue("--size");
      
        // Si la taille stockée correspond à la taille de l'option
        if (size === storedSize) {
          // Définissez cette option comme sélectionnée
          option.selected = true;
          break;
        }
      }
      
      if (storedSize) {
        document.body.style.setProperty("--size-here", storedSize);
        
            // Sélectionnez l'option actuellement choisie
      var chooseOption = document.querySelector(".header--size-select option.choose");

      if (chooseOption) {
        chooseOption.classList.remove("choose");
      }

      // Sélectionnez l'élément select
      var SizeSelect = document.querySelector(".header--size");

      // Parcourez toutes les options
      SizeSelect.options.forEach(function(option) {
        var size = option.style.getPropertyValue("--size");

        // Si la taille stockée correspond à la taille de l'option
        if (size === storedSize) {
          // Ajoutez la classe "choose" à l'option
          option.classList.add("choose");
        }
      });
    }
  });