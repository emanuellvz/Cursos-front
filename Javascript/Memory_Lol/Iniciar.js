function fondo(){
    document.querySelector("#sonido-fondo").play();
    musicaoff.classList.add("visible");
    musica.classList.add("no-visible")
}

function quitarfondo(){
    document.querySelector("#sonido-fondo").pause();
    musica.classList.remove("no-visible")
    musicaoff.classList.remove("visible")
}

function iniciar() {
  movimientos = 0;
  repartir(niveles[nivelAcual].tarjetas);
  MaxContador();   
  document.querySelector("#mov").innerText = "00";
    
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");    
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });
    
    if (!modoRelax){
        iniciaCronometro();
    } else {
        document.querySelector("#cronometro").classList.add("oculto");
        document.querySelector("#movimientos").classList.add("oculto");
    }
    //iniciaCronometro()
}

function reiniciar() {
    MaxContador();
    if(puntosTotales<100){
    document.querySelector("#puntos").innerText="00"+puntosTotales;
    }
  ActualizaNivel();
  iniciar();
}

function volver() {
  nivelAcual = 0;
    MaxContador();
    puntosTotales=0;
    ActualizaNivel();
    document.querySelector("#puntos").innerText="00"+puntosTotales;
    document.querySelector("#bienvenida").classList.add("visible")
}

function iniciaJuegoNormal(){
    modoRelax=false;
    document.querySelector("#bienvenida").classList.remove("visible");
    iniciar();
    document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciaJuegoRelax(){
    modoRelax=true;
    document.querySelector("#bienvenida").classList.remove("visible");
    iniciar();
}

ActualizaNivel();


var musica=document.querySelector("#musica");
musica.addEventListener("click",fondo);

var musicaoff=document.querySelector("#musica2");
musicaoff.addEventListener("click",quitarfondo);


document.querySelector("#subir").addEventListener("click", CargaNuevoNivel);
