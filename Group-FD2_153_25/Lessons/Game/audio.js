const audioPlayer = document.getElementById('game-music');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
    audioPlayer.play();
});

// For sound effects, you might have multiple hidden audio elements
function playSoundEffect() {
    const effect = new Audio('path/to/your/effect.wav');
    effect.play();
}