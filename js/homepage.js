$(document).ready(function () {
  /* -------- Muestra un modal al cargar la vista homepage -------- */
  $('#modal-info').modal('show');

  /* -------- Funcionalidad al btn search y que se dirija a los resultados de la busqueda -------- */
  $('#btn-search').click(function () {
    event.preventDefault();
    var districtSearch = $('#input-district').val();

    // LocalStorage almacenaremos localmente el valor introducido en el input
    localStorage.setItem('district', districtSearch);

    // Consultar el valor guardado en la variable.  
    var district = localStorage.getItem('district').toUpperCase();
    console.log('Lectura: ', district);

    var accountant = 0;
    // Recorriendo el JSON data.js
    for (var i = 0; i < restaurants.length; i++) {
      var districts = restaurants[i].location;

      $.each(districts, function (key, value) {
        var locations = key.toUpperCase();
        if (district == locations) {
          console.log('Se encontro uno en la siguiente dirección:', value);
          accountant++;
          console.log(accountant);
        }
      });
      if (accountant > 0) {
        window.location.href = '../views/results.html';
      } else {
        $('#alert-danger').modal('show');
      }
    }
  });
});