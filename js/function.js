

var song = ["./assets/sounds/burro.mp3" , "./assets/sounds/caballo.mp3", "./assets/sounds/cabra.mp3", "./assets/sounds/cerdo.mp3"
, "./assets/sounds/conejo.mp3", "./assets/sounds/gallina.mp3", "./assets/sounds/gallo.mp3", "./assets/sounds/perro.mp3", "./assets/sounds/pito.mp3"
, "./assets/sounds/vaca.mp3"];

var audio = new Audio();
var setSound = function() {
var soundFile = escape(song[Math.floor(Math.random()*song.length)]);
audio.setAttribute("src", soundFile);


    audio.play();
     
setSound();

audio.addEventListener("ended", setSound, false);
}

var listaImagenes = document.getElementById("./assets/images/burro.png"); 
// el id de donde quiere mostrar tu listado, te recomendaría poner los links directamente
// no enquilombarte haciendo la concatenación con el ".jpg"

var arreglo = ["./assets/images/burro.png","./assets/images/vaca.png","./assets/images/perro.png","./assets/images/conejo.png"]
var NuevoArreglo = [];

var auxiliar;
// primer for
for (var item = arreglo.length; item; item--) {
    var numRandom = Math.floor(Math.random() * item);
    auxiliar = arreglo[item - 1];
    NuevoArreglo[item - 1] = arreglo[numRandom];
    arreglo[numRandom] = auxiliar;
}
// segundo for
for(var item = 0; item < arreglo.length ; item++){
    var parrafo = document.createElement("p");
    parrafo.innerHTML = NuevoArreglo[item];
    listaImagenes.appendChild(parrafo);
}