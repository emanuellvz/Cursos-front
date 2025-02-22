function barajar(lasTarjetas) {
  var totalTarjetas = lasTarjetas.concat(lasTarjetas);
  var resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

function repartir(lasTarjetas) {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajar(lasTarjetas);
  mesa.innerHTML="";
    
  tarjetasBarajadas.forEach(function(elemento) {
    var tarjeta = document.createElement("div");
    tarjeta.innerHTML =
      "<div class=tarjeta data-valor=" +
      elemento +
      ">" +
      "<div class=tarjeta__contenido>" +
      "<img src=" +
      elemento +
      ">" +
      "</div>" +
      "</div>";
    mesa.appendChild(tarjeta);
  });
}
