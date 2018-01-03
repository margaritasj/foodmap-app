$(document).ready(function () {
  /* -------- declarando variables de los elementos a utilizar. -------- */
  var container = $('.photo-restaurant');
  var bsExample = $('.bs-example2');

  var modal = $('#modal-info');
  var tittle = $('#tittle');
  var logo = $('#logo');
  var description = $('.p-info');

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
        var overlay = $('<div class="image-overlay" ></div>');
        var nameRestaurant = $('<div class="text text-center"></div>');
        /* var icon = $('<i class="fas fa-search-plus"></i>'); */

        var imgPhoto = img.attr("src", photoRestaurants);

        nameRestaurant.html(restaurants[i].name);
        container.append(bsExample);
        bsExample.append(col);
        col.append(nameRestaurant);
        col.append(thumbnail);
        /* thumbnail.append(icon);*/
        thumbnail.append(overlay);
        thumbnail.append(img);


        // Creando los contenedores para el modal:
        var imglogo = logo.attr("src", logoRestaurants);

        tittle.html(name);


        // añadiendo mouseover a las imagenes
        $('.thumbnail').mouseover(function () {
          $('.image-overlay').show();
          // añadiendo modal
          $('.image-overlay').click(function () {
            $('#modal-info').modal('show');
          });
        }).mouseout(function () {
          $('.image-overlay').hide();
        });

        $('img').addClass('size-photo');

      }
    });
  }
});