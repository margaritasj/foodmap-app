$(document).ready(function () {
  // Mostrar splash por un de tiempo de 5 seg.
  $('#splash').show(500, function () {
    setTimeout(function () {
      setTimeout(function () {
        window.location.href = "../foodmap/views/homepage.html";
      }, 0);
    }, 5000);
  });

  $("#modal-info").modal("show");



});

