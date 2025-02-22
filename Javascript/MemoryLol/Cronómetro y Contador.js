function iniciaCronometro() {
    var segundos=niveles[nivelAcual].segundos;
  var minutos = 0;
  var segundosTexto;
  var minutosTexto;

  function ActualizaCronometro() {
    segundos--;
    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }

    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
        timeOver();
    }
      
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    }
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }

    document.querySelector("#segundos").innerText = segundosTexto;
    document.querySelector("#minutos").innerText = minutosTexto;
  }
  cronometro = setInterval(ActualizaCronometro, 1000);
}

function ActualizaContador() {
  var movimientosTexto;
  ++movimientos;
  movimientosTexto = movimientos;

  if (movimientos > niveles[nivelAcual].movimientosMax && !modoRelax) {
    gameOver();
    return;
  }

  if (movimientos < 10) {
    movimientosTexto = "0" + movimientos;
  }

  document.querySelector("#mov").innerText = movimientosTexto;
}

function MaxContador() {
  var movimientosMaxTexto = niveles[nivelAcual].movimientosMax;
  if (movimientosMaxTexto < 10) {
    movimientosMaxTexto = "0" + movimientosMaxTexto;
  }
  document.querySelector("#mov-total").innerText = movimientosMaxTexto;
}
MaxContador();

function puntuacion(){
    if(movimientos!=movimientosMax){
        puntos=(niveles[nivelAcual].movimientosMax-movimientos+1)*100;
        puntosTotales=puntosTotales+puntos;
    } else if(movimientos==movimientosMax) {
    puntos=(puntos+1)*100;
    }
    document.querySelector("#puntos").innerText=puntosTotales;
}