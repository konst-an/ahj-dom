import './style.css';
import goblin from './img/goblin.png';

const FIELD_SIZE = 4;
const CELLS_COUNT = FIELD_SIZE * FIELD_SIZE;
const MOVE_INTERVAL_MS = 1000;

const game = document.createElement('div');
game.id = 'game';
document.body.append(game);

const cells = [];

for (let i = 0; i < CELLS_COUNT; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    game.append(cell);
    cells.push(cell);
}

const img = document.createElement('img');
img.src = goblin;
img.classList.add('goblin');

let currentIndex = Math.floor(Math.random() * cells.length);
cells[currentIndex].append(img);

// Движение
const intervalId = setInterval(() => {
    let newIndex;

    do {
        newIndex = Math.floor(Math.random() * cells.length);
    } while (newIndex === currentIndex);

    cells[newIndex].append(img);
    currentIndex = newIndex;
}, MOVE_INTERVAL_MS);

function stopGame() {
    clearInterval(intervalId);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        stopGame();
    }
});