const PAD_SIZE = 960;

function drawPad(side) {
  container.replaceChildren();
  for (let i = 0; i < side*side; i++) {
    let tile = document.createElement('div');
    tile.style.width = `${PAD_SIZE / side}px`;
    tile.style.height = `${PAD_SIZE / side}px`;
    tile.style.backgroundColor = '#fef39a';
    container.appendChild(tile);
  }
}

const container = document.querySelector('.container');
container.style.width = `${PAD_SIZE}px`;
container.style.height = `${PAD_SIZE}px`;
container.style.display = 'flex';
container.style.flexWrap = 'wrap';

container.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = '#89c1c3';
});

const button = document.querySelector('button');
button.addEventListener('click', () => {
  let side = Number(prompt('Number of squares per side (max 100):', 100));
  if (side >= 0 && side <= 100) {
    drawPad(side);
  }
});

drawPad(100);