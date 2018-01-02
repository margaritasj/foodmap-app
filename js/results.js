$(document).ready(function () {
  /* -------- Mostrar splash por un de tiempo de 5 seg. -------- */
  var container = $('.photo-restaurant');
  var bsExample = $('.bs-example2');


  // Recorriendo el JSON data.js
  for (var i = 0; i < restaurants.length - 1; i++) {
    var photoRestaurants = restaurants[i].photo;

    // Creando los contenedores:
    var col = $('<div class = "col-xs-12 col-md-8 col-md-offset-2"> </div>');
    var thumbnail = $('<a class = "thumbnail card-photo" data-src="holder.js/100%x180"> </a>');
    var img = $('<img class = "" src="" alt="">');

    var imgPhoto = img.attr("src", photoRestaurants);
    container.append(bsExample);
    bsExample.append(col);
    col.append(thumbnail);
    thumbnail.append(img);

    $('img').addClass('size-photo');
  }
});