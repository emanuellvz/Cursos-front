//Agregar item
document.getElementById("agregar").addEventListener("click",function(){
let item=document.getElementById("item").value;
let items=[];
if(item!=""){
let addItem=`<li>`+item+`</li>`;
let contenedor=document.getElementById("contenedor");
contenedor.innerHTML+=addItem;
document.getElementById("item").innerHTML="";
}
})

//Limpiar lista
document.getElementById("limpiar").addEventListener("click",function(){
    contenedor.innerHTML="";
})

let lista=[];
