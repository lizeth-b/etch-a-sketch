const PAD_SIZE = 960;
let isDrawing = false;

function drawPad(side) {
  container.replaceChildren();
  for (let i = 0; i < side*side; i++) {
    let tile = document.createElement('div');
    tile.dataset.counter = 11;
    tile.style.width = `${PAD_SIZE / side}px`;
    tile.style.height = `${PAD_SIZE / side}px`;
    tile.style.backgroundColor = '#fef39a';
    container.appendChild(tile);
  }
}

function changeTileColor(e) {
  if (isDrawing) {
    if (e.target.dataset.counter > 0) {
      e.target.dataset.counter = Number(e.target.dataset.counter) - 1;
    }
    e.target.style.backgroundColor = `hsl(182, 33%, ${5 * e.target.dataset.counter}%)`;
  }
}

const container = document.querySelector('.container');
container.style.width = `${PAD_SIZE}px`;
container.style.height = `${PAD_SIZE}px`;
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.addEventListener('mousedown', () => {isDrawing = true});
container.addEventListener('mouseup', () => {isDrawing = false});
container.addEventListener('mouseover', changeTileColor);

const button = document.querySelector('button');
button.addEventListener('click', () => {
  let side = Number(prompt('Number of squares per side (max 100):', 100));
  if (side >= 0 && side <= 100) {
    drawPad(side);
  }
});

drawPad(100);