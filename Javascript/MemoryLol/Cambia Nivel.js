function subeNivel() {
  nivelAcual++;
}

function ActualizaNivel() {
  var nivelTexto = nivelAcual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
   
}

function CargaNuevoNivel() {
  subeNivel();
  ActualizaNivel();
  iniciar();
  MaxContador();
}
