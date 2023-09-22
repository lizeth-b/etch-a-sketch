const container = document.querySelector(".container");
container.style.width = '960px';
container.style.height = '960px';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';

for (let i = 0; i < 256; i++) {
  let tile = document.createElement('div');
  tile.style.width = '60px';
  tile.style.height = '60px';
  tile.style.backgroundColor = 'yellow';
  container.appendChild(tile);
}