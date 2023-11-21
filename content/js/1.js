$(document).ready(function() {
    $(".header--theme-button").on("click", function() {
      var primaryColor = $(this).css("--theme-primary");
      var secondaryColor = $(this).css("--theme-secondary");
    
      $(".header--theme-button").removeClass("active");
      $(this).addClass("active");
    
      $(document.body).css("--primary-color", primaryColor);
      $(document.body).css("--secondary-color", secondaryColor);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var SizeButtons = document.querySelectorAll(".header--size-button");
    var themeButtons = document.querySelectorAll(".header--theme-button");
  
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
  
    themeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        var primaryColor = getComputedStyle(this).getPropertyValue("--theme-primary");
        var secondaryColor = getComputedStyle(this).getPropertyValue("--theme-secondary");
        
        themeButtons.forEach(function(btn) {
          btn.classList.remove("active");
        });
        this.classList.add("active");
        
        document.body.style.setProperty("--primary-color", primaryColor);
        document.body.style.setProperty("--secondary-color", secondaryColor);
        
        // Stockage des couleurs du thème sélectionné
        localStorage.setItem("primaryColor", primaryColor);
        localStorage.setItem("secondaryColor", secondaryColor);
      });
    });
  
    // Récupération de la taille lors du chargement de la page
    var Storedsize = localStorage.getItem("size");
    var storedPrimaryColor = localStorage.getItem("primaryColor");
    var storedSecondaryColor = localStorage.getItem("secondaryColor");
  
    if (Storedsize) {
      document.body.style.setProperty("--size", Storedsize);
  
      var chooseButton = document.querySelector(".header--size-button.choose");
      if (chooseButton) {
        chooseButton.classList.remove("choose");
      }
  
      // Sélection du bouton correspondant à la taille précédemment sélectionnée
      SizeButtons.forEach(function(button) {
        var size = getComputedStyle(button).getPropertyValue("--size");
  
        if (size === Storedsize) {
          button.classList.add("choose");
        }
      });
    }
  
    if (storedPrimaryColor && storedSecondaryColor) {
      document.body.style.setProperty("--primary-color", storedPrimaryColor);
      document.body.style.setProperty("--secondary-color", storedSecondaryColor);
      
      var activeButton = document.querySelector(".header--theme-button.active");
      if (activeButton) {
        activeButton.classList.remove("active");
      }
      
      // Sélection du bouton correspondant au thème précédemment sélectionné
      themeButtons.forEach(function(button) {
        var primaryColor = getComputedStyle(button).getPropertyValue("--theme-primary");
        var secondaryColor = getComputedStyle(button).getPropertyValue("--theme-secondary");
        
        if (primaryColor === storedPrimaryColor && secondaryColor === storedSecondaryColor) {
          button.classList.add("active");
        }
      });
    }
  });