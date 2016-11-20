import './style.css';
import Grid from './grid';
import Game from './game';

const parentContainer = document.body;
const size = 4;
const grid = new Grid(parentContainer, size);
grid.generate();
const game = new Game(size);
game.start();
// module.hot.accept();
