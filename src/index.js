import './style.css';

import Game from './game';

const parentContainer = document.body;
const size = 4;
const game = new Game(parentContainer, size);
game.start();
module.hot.accept();
