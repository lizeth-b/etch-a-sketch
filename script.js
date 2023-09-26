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

function isMobileDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

const newPad = document.querySelector('.new');
const pixelSide = document.querySelector('#pixels');
newPad.addEventListener('submit', (e) => {
  e.preventDefault();
  if (pixelSide.value >= 0 && pixelSide.value <= 100) {
    drawPad(pixelSide.value);
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
if (isMobileDevice()) {
  container.addEventListener('touchstart', () => {isDrawing = true});
  container.addEventListener('touchend', () => {isDrawing = false});
  container.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (isDrawing) {
      changeTileColor(e);
    }
  });
} else {
  container.addEventListener('mousedown', () => {isDrawing = true});
  container.addEventListener('mouseup', () => {isDrawing = false});
  container.addEventListener('mouseover', (e) => {if (isDrawing) changeTileColor(e)});
}

drawPad(100);