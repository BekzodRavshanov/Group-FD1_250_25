import {ARENA, ORIENTATIONS} from "./constans.js"
import { Fighter } from "./fighter.js";
import { draw } from "./draw.js";

export class Game {
    fighters = [];

    init () {
        this.initCanvas();
        this.initializeFighters();
        this.animate();

    }

    initCanvas(){
        const canvas = document.getElementById('canvas');
        canvas.width = ARENA.WIDTH;
        canvas.height = ARENA.HEIGHT;
        this.context = canvas.getContext('2d');
    }

    initializeFighters() {
        this.fighters[0] = new Fighter ('Player_1', ORIENTATIONS.LEFT);
        this.fighters[1] = new Fighter ('Player_2', ORIENTATIONS.RIGHT);
    }

    animate() {
        draw(this.fighters[0], this.fighters[1], this.context);
        requestAnimationFrame(() => this.animate());
    }
}