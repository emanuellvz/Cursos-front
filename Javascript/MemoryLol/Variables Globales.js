var modoRelax=false;

var grupoTarjetas = [
  [
   "http://pm1.narvii.com/6525/80f244768dc16569e26c8fd4586b54643d503959_00.jpg",
      "https://i.pinimg.com/474x/40/50/77/40507737fc0a9bc7d1e65d7b52e21dfa.jpg"
  ],
  [
      "https://tl.vhv.rs/dpng/s/577-5771751_league-of-legends-bittersweet-lulu-png-download-lulu.png",
      "https://i.redd.it/849hp76jous41.png"
  ],  
  [
      "https://images.hdqwalls.com/download/league-of-legends-katarina-4k-ji-750x1334.jpg",
  "http://pm1.narvii.com/7053/29a65d60fd65d78fe5970ec8307c20ebefceb0c3r1-193-261v2_uhq.jpg"]
];

var cronometro;

var puntos=0;
var puntosTotales=0;

var numDeErrores = 0,
  numDeAciertos = 0;

var movimientos = 0;
var movimientosMax;
var segundos;

var nivelAcual = 0;

var niveles = [
  { tarjetas: grupoTarjetas[0], movimientosMax: 3,
  segundos:10},
  { tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]), movimientosMax: 7,
   segundos:20},
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12,
      segundos:30
  }
];
