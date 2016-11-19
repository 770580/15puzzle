import shuffle from './support';

class Grid {
  constructor(parentConteiner, size) {
    this.parentContainer = parentConteiner;
    this.size = size;
    this.generate = this.generate.bind(this);
  }

  generate() {
    const container = document.createElement('div');
    container.classList.add('container');
    this.parentContainer.appendChild(container);

    // формируем игровую сетку
    let gridItems = [];

    for (let i = 1; i < this.size ** 2; i += 1) {
      gridItems.push(i);
    }

    gridItems = shuffle(gridItems);
    gridItems.push('');

    gridItems.forEach((item) => {
      const gridItem = document.createElement('div');
      gridItem.id = item || 'blank';
      gridItem.classList.add('gridItem');
      gridItem.innerHTML = item;
      container.appendChild(gridItem);
    });
  }
}

export default Grid;
