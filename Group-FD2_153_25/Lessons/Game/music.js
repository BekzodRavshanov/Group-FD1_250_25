const bgMusic = new Audio('audio/background.mp3');

bgMusic.loop = true;
bgMusic.volume = 0.5;

// браузер разрешит звук только после ЛЮБОГО взаимодействия
const startMusic = () => {
  bgMusic.play().catch(() => {});
  window.removeEventListener('click', startMusic);
  window.removeEventListener('keydown', startMusic);
};

window.addEventListener('click', startMusic);
window.addEventListener('keydown', startMusic);
