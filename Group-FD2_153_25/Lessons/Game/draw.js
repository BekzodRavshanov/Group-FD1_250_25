import { ARENA, ORIENTATIONS, MOVE_TYPES } from "./constants.js";

export function draw(fighter1, fighter2, context, resourceManager) {
  context.clearRect(0, 0, ARENA.WIDTH, ARENA.HEIGHT);
  drawFighter(fighter1, context, resourceManager);
  drawFighter(fighter2, context, resourceManager);

}

function drawFighter(fighter, context, resourceManager) {
  const url = `./images/fighters/${fighter.name}/${fighter.orientation}/${fighter.moveType}/${fighter.currentMove.currentStep}.png`;
  const currentImg = resourceManager.getImage(url);

  let x = fighter.orientation === ORIENTATIONS.LEFT
    ? calculateXForLeftAlign(fighter, currentImg)
    : calculateXForRightAlign(fighter, currentImg);

  if (fighter.moveType === MOVE_TYPES.FALL) {
    x = fighter.orientation === ORIENTATIONS.LEFT
      ? calculateXForRightAlign(fighter, currentImg)
      : calculateXForLeftAlign(fighter, currentImg);
  }

  if (fighter.moveType === MOVE_TYPES.WIN) {
    x = calculateXForCenterAlign(fighter, currentImg);
  }

  const y = fighter.y - currentImg.height;

  context.drawImage(currentImg, x, y);
}

function calculateXForLeftAlign(fighter, currentImg) {
  return fighter.x - fighter.width / 2;
}

function calculateXForRightAlign(fighter, currentImg) {
  return fighter.x - fighter.width / 2 + fighter.width - currentImg.width;
}

function calculateXForCenterAlign(fighter, currentImg) {
  return fighter.x - currentImg.width / 2;
}