$(document).ready(function () {
  /* -------- Mostrar splash por un de tiempo de 5 seg. -------- */
  var container = $('.photo-restaurant');
  var bsExample = $('.bs-example2');

  var district = localStorage.getItem('district').toUpperCase();
  // Recorriendo el JSON data.js
  for (var i = 0; i < restaurants.length; i++) {
    var districts = restaurants[i].location;
    var name = restaurants[i].name;
    var photoRestaurants = restaurants[i].photo;
    var logoRestaurants = restaurants[i].logo;
    var descriptionRestaurants = restaurants[i].logo;

    $.each(districts, function (key, value) {
      var locations = key.toUpperCase();
      if (district == locations) {
        // Creando los contenedores:
        var col = $('<div class = "col-xs-12 col-md-8 col-md-offset-2"> </div>');
        var thumbnail = $('<a class = "thumbnail card-photo" data-src="holder.js/100%x180"> </a>');
        var img = $('<img class = "" src="" alt="">');
        var overlay = $('<div class="image-overlay"></div>');
        var nameRestaurant = $('<div class="text text-center"></div>');
        /* var icon = $('<i class="fas fa-search-plus"></i>'); */

        var imgPhoto = img.attr("src", photoRestaurants);
        nameRestaurant.html(name);
        container.append(bsExample);
        bsExample.append(col);
        col.append(nameRestaurant);
        col.append(thumbnail);
        /* thumbnail.append(icon);*/
        thumbnail.append(overlay);
        thumbnail.append(img);

        // añadiendo mouseover a las imagenes
        $('.thumbnail').mouseover(function () {
          $('.image-overlay').show();
        }).mouseout(function () {
          $('.image-overlay').hide();
        });

        $('img').addClass('size-photo');

        
      }
    });
  }
});