let AudioTestButton = document.getElementById("AudioTestButton")
AudioTestButton.onclick = function (){
    let audio = new Audio('assets/sounds/audioTest.mp3')
    audio.play();
}