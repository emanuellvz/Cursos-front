function finalizar() {
    clearInterval(cronometro);
  if (nivelAcual < niveles.length - 1) {
    document.querySelector("#subeNivel").classList.add("visible");
      puntuacion();
  } else {
    document.querySelector("#endGame").classList.add("visible");
      puntuacion();
  }
}
