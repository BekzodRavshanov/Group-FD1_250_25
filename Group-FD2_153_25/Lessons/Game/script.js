import {Game} from "./game.js";

function startNewGame () {
    const game = new Game ();
    game.init();
    document.querySelector('.loading').style.display = 'none';
    
}

startNewGame();