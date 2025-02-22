function descubrir() {
  var tarjetasPendientes;
  var descubiertas;
  var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );

    
  if (totalDescubiertas.length > 1) {
    return;
  }
  this.classList.add("descubierta");
    
    //Sonido Twitch
    if(this.dataset.valor=== "http://pm1.narvii.com/6525/80f244768dc16569e26c8fd4586b54643d503959_00.jpg" && totalDescubiertas.length<1){
      document.querySelector("#twitch1").play();
    }
    
    //Sonido Garen
    if(this.dataset.valor==="https://i.pinimg.com/474x/40/50/77/40507737fc0a9bc7d1e65d7b52e21dfa.jpg" && totalDescubiertas.length<1){
        document.querySelector("#garen1").play();
    }
    
    //Sonido Lulu
    if(this.dataset.valor==="https://tl.vhv.rs/dpng/s/577-5771751_league-of-legends-bittersweet-lulu-png-download-lulu.png" && totalDescubiertas.length<1){
        document.querySelector("#lulu1").play()
    }
    
    //Sonido Yuumi
    if(this.dataset.valor==="https://i.redd.it/849hp76jous41.png" && totalDescubiertas.length<1){
        document.querySelector("#yuumi1").play()
    }
    
    //Sonido Katarina
    if(this.dataset.valor==="https://images.hdqwalls.com/download/league-of-legends-katarina-4k-ji-750x1334.jpg" && totalDescubiertas.length<1){
        document.querySelector("#katarina1").play()
    }
    
    //Sonido Aurelion
    if(this.dataset.valor==="http://pm1.narvii.com/7053/29a65d60fd65d78fe5970ec8307c20ebefceb0c3r1-193-261v2_uhq.jpg" && totalDescubiertas.length<1){
        document.querySelector("#aurelion1").play()
    }
    
  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) {
    return;
  }

  comparar(descubiertas);
  ActualizaContador();
  tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  if (tarjetasPendientes.length === 0) {
    setTimeout(finalizar, 1500); 
  }
}

function comparar(tarjetasAComparar) {
  if (
    tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor
  ) {
    acierto(tarjetasAComparar);
  } else {
    error(tarjetasAComparar);
  }
}
