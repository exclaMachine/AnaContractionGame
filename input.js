let inputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
    case "w":
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
    case "s":
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
    case "a":
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
    case "d":
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  return inputDirection;
}
