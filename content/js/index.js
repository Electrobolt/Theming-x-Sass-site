document.addEventListener("DOMContentLoaded", function() {
  var themeButtons = document.querySelectorAll(".header--theme-button");
  
  themeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var primaryColor = getComputedStyle(this).getPropertyValue("--theme-primary");
      var secondaryColor = getComputedStyle(this).getPropertyValue("--theme-secondary");
      var bodyColor = getComputedStyle(this).getPropertyValue("--body-color");
      
      themeButtons.forEach(function(btn) {
        btn.classList.remove("active");
      });
      this.classList.add("active");
      
      document.body.style.setProperty("--primary-color", primaryColor);
      document.body.style.setProperty("--secondary-color", secondaryColor);
      document.body.style.setProperty("--body-color", bodyColor);
      
      // Stockage des couleurs du thème sélectionné
      localStorage.setItem("primaryColor", primaryColor);
      localStorage.setItem("secondaryColor", secondaryColor);
      localStorage.setItem("bodyColor", bodyColor);
    });
  });
  
  // Récupération des couleurs du thème lors du chargement de la page
  var storedPrimaryColor = localStorage.getItem("primaryColor");
  var storedSecondaryColor = localStorage.getItem("secondaryColor");
  var storedBodyColor = localStorage.getItem("bodyColor");
  
  if (storedPrimaryColor && storedSecondaryColor && storedBodyColor) {
    document.body.style.setProperty("--primary-color", storedPrimaryColor);
    document.body.style.setProperty("--secondary-color", storedSecondaryColor);
    document.body.style.setProperty("--body-color", storedBodyColor);
    
    var activeButton = document.querySelector(".header--theme-button.active");
    if (activeButton) {
      activeButton.classList.remove("active");
    }
    
    // Sélection du bouton correspondant au thème précédemment sélectionné
    themeButtons.forEach(function(button) {
      var primaryColor = getComputedStyle(button).getPropertyValue("--theme-primary");
      var secondaryColor = getComputedStyle(button).getPropertyValue("--theme-secondary");
      var bodyColor = getComputedStyle(button).getPropertyValue("--body-color");
      
      if (primaryColor === storedPrimaryColor && secondaryColor === storedSecondaryColor && bodyColor === storedBodyColor) {
        button.classList.add("active");
      }
    });
  }
});