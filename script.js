const PAD_SIZE = 960;

function drawPad(side) {
  container.replaceChildren();
  for (let i = 0; i < side*side; i++) {
    let tile = document.createElement('div');
    tile.dataset.counter = 11;
    tile.style.width = `${PAD_SIZE / side}px`;
    tile.style.height = `${PAD_SIZE / side}px`;
    container.appendChild(tile);
  }
}

function changeTileColor(e) {
  if (brushMode) {
    if (e.target.dataset.counter > 0) {
      e.target.dataset.counter = Number(e.target.dataset.counter) - 1;
    }
    e.target.style.backgroundColor = `hsl(182, 33%, ${5 * e.target.dataset.counter}%)`;
  } else {
    e.target.dataset.counter = 11;
    e.target.style.backgroundColor = '#fef39a';
  }
}

const newBtn = document.querySelector('.new');
newBtn.addEventListener('click', () => {
  let side = Number(prompt('Number of squares per side (max 100):', 100));
  if (side >= 0 && side <= 100) {
    drawPad(side);
  }
});

const modeBtn = document.querySelector('.mode');
let brushMode = true;
modeBtn.addEventListener('click', () => {
  if (brushMode) {
    modeBtn.textContent = 'Use brush';
    brushMode = false;
  } else {
    modeBtn.textContent = 'Use eraser';
    brushMode = true;
  }
});

const container = document.querySelector('.container');
container.style.width = `${PAD_SIZE}px`;
container.style.height = `${PAD_SIZE}px`;
let isDrawing = false;
container.addEventListener('mousedown', () => {isDrawing = true});
container.addEventListener('mouseup', () => {isDrawing = false});
container.addEventListener('mouseover', (e) => {if (isDrawing) changeTileColor(e)});

drawPad(100);