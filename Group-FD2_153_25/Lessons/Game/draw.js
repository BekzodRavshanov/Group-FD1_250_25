 export function draw(fighter1, fighter2, context) {
    context.clearRect(0, 0, ARENA.WIDTH, ARENA.HEIGHT);
    drawFighter(fighter1, context);

    context.strokeStyle = 'green';
    context.strokeRect(fighter1.x - fighter1.width/2,fighter1.y - fighter1.height, fighter1.width, fighter1.height);
    context.strokeRect(fighter2.x - fighter2.width/2,fighter2.y - fighter2.height, fighter2.width, fighter2.height);

} 

function drawFighter(fighter, context) {
    const url = sds
}
