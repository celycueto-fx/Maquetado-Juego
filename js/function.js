
function audios(){
    var song = ["./assets/sounds/burro.mp3" , "./assets/sounds/vaca.mp3", "./assets/sounds/caballo.mp3", "./assets/sounds/conejo.mp3", "./assets/sounds/perro.mp3" ];
var audio = new Audio();
var setSound = function() {
var soundFile = escape(song[Math.floor(Math.random()*song.length)]);
audio.setAttribute("src", soundFile);
audio.play();
};

// set initial source
setSound();
// set a new source, when current sound is done playing
audio.addEventListener("ended", setSound, false);
}