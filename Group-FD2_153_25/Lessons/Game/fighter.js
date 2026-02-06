import { ORIENTATIONS, PLAYER_BOTTOM, PLAYER_HEIGHT, PLAYER_WIDTH } from "./constans.js  ";

const START_X_POSITION = {
    [ORIENTATIONS.LEFT]: 100,
    [ORIENTATIONS.RIGHT]: 500,
}

export class Fighter {
    life = 100;
    width = PLAYER_WIDTH;
    height = PLAYER_HEIGHT;

    constructor(name,orintation) {
        this.name = name;
        this.orintation = orintation;
        this.x = START_X_POSITION[orintation]; // в центре игрока
        this.y = PLAYER_BOTTOM

    }
}

