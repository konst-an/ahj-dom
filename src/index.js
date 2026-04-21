import './style.css';
import goblin from './img/goblin.png';

const game = document.createElement('div');
game.id = 'game';
document.body.appendChild(game);

const size = 4;
const cells = [];

// Клетки
for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    game.appendChild(cell);
    cells.push(cell);
}

// Гоблин
const img = document.createElement('img');
img.src = goblin;
img.classList.add('goblin');

let currentIndex = Math.floor(Math.random() * cells.length);
cells[currentIndex].appendChild(img);

// Движение
setInterval(() => {
    let newIndex;

    do {
        newIndex = Math.floor(Math.random() * cells.length);
    } while (newIndex === currentIndex);

    cells[newIndex].appendChild(img);
    currentIndex = newIndex;
}, 1000);