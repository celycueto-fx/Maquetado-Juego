

var song = ["./assets/sounds/burro.mp3" , "./assets/sounds/caballo.mp3", "./assets/sounds/cabra.mp3", "./assets/sounds/cerdo.mp3"
, "./assets/sounds/conejo.mp3", "./assets/sounds/gallina.mp3", "./assets/sounds/gallo.mp3", "./assets/sounds/perro.mp3", "./assets/sounds/pito.mp3"
, "./assets/sounds/vaca.mp3"];

var audio = new Audio();
var setSound = function() {
var soundFile = escape(song[Math.floor(Math.random()*song.length)]);
audio.setAttribute("src", soundFile);
}
.then(() => {
    
    audio.play();
      })

.catch(error => {
    console.log(error);

});

setSound();

audio.addEventListener("ended", setSound, false);
