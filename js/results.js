$(document).ready(function () {
  /* -------- Mostrar splash por un de tiempo de 5 seg. -------- */
  // Recorriendo el JSON data.js
  for (var i = 0; i < restaurants.length; i++) {
    var photoRestaurants = restaurants[i].photo;

    $('img').attr("src",photoRestaurants);

  }
});
