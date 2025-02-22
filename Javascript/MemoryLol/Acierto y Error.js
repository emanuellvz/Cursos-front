function acierto(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");
  });
//Garen   
    if(lasTarjetas[1].dataset.valor==="https://i.pinimg.com/474x/40/50/77/40507737fc0a9bc7d1e65d7b52e21dfa.jpg"){
        document.querySelector("#garen2").play()}
   //Twitch
    if(lasTarjetas[1].dataset.valor==="http://pm1.narvii.com/6525/80f244768dc16569e26c8fd4586b54643d503959_00.jpg"){
        document.querySelector("#twitch2").play()}
    
//Lulu
if(lasTarjetas[1].dataset.valor==="https://tl.vhv.rs/dpng/s/577-5771751_league-of-legends-bittersweet-lulu-png-download-lulu.png"){
    document.querySelector("#lulu2").play()
}
    
    //Yuumi
    if(lasTarjetas[1].dataset.valor==="https://i.redd.it/849hp76jous41.png"){
        document.querySelector("#yuumi2").play()
    }
    
    //Katarina
    if(lasTarjetas[1].dataset.valor==="https://images.hdqwalls.com/download/league-of-legends-katarina-4k-ji-750x1334.jpg"){
        document.querySelector("#katarina2").play();
    }
    
    //Aurelion
    if(lasTarjetas[1].dataset.valor==="http://pm1.narvii.com/7053/29a65d60fd65d78fe5970ec8307c20ebefceb0c3r1-193-261v2_uhq.jpg"){
        document.querySelector("#aurelion2").play();
    }
}
   // document.querySelector("#sonido-acierto").cloneNode().play();


function error(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("error");
  });
    //Garen
    if(lasTarjetas[1].dataset.valor==="https://i.pinimg.com/474x/40/50/77/40507737fc0a9bc7d1e65d7b52e21dfa.jpg"){
        document.querySelector("#garen3").play();
    }
    //Twitch
     if(lasTarjetas[1].dataset.valor==="http://pm1.narvii.com/6525/80f244768dc16569e26c8fd4586b54643d503959_00.jpg"){
        document.querySelector("#twitch3").play();
    }
    
    //Lulu
    
    if(lasTarjetas[1].dataset.valor==="https://tl.vhv.rs/dpng/s/577-5771751_league-of-legends-bittersweet-lulu-png-download-lulu.png"){
        document.querySelector("#lulu3").play();
    }
    
    //Yuumi
    
    if(lasTarjetas[1].dataset.valor==="https://i.redd.it/849hp76jous41.png"){
        document.querySelector("#yuumi3").play();
    }
    
    //Katarina
    
    if(lasTarjetas[1].dataset.valor==="https://images.hdqwalls.com/download/league-of-legends-katarina-4k-ji-750x1334.jpg"){
        document.querySelector("#katarina3").play();
    }
    
    //Aurelion
    
    if(lasTarjetas[1].dataset.valor==="http://pm1.narvii.com/7053/29a65d60fd65d78fe5970ec8307c20ebefceb0c3r1-193-261v2_uhq.jpg"){
        document.querySelector("#aurelion3").play();
    }

  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
    console.log(lasTarjetas)
}
