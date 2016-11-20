class Game {
  constructor(size) {
    this.size = size;
    this.container = document.querySelector('.container');
    this.start = this.start.bind(this);
    this.move = this.move.bind(this);
    this.activeItems = {};
  }

  start() {
    const items = this.container.querySelectorAll('.gridItem');
    const blankSquare = this.container.querySelector('#blank');
    const blankPosition = [...items].indexOf(blankSquare);
    this.activeItems = {
      blank: blankSquare,
      blankElemPosition: blankPosition,
      left: items[blankPosition - 1],
      top: items[blankPosition - this.size],
      right: items[blankPosition + 1],
      bottom: items[blankPosition + this.size],
    };
    document.addEventListener('keydown', this.move);
  }

  move(event) {
    const key = event.key;
    if (key === 'ArrowRight') {
      if (this.activeItems.blankElemPosition % this.size === 0) return;
      this.container.insertBefore(this.activeItems.blank, this.activeItems.left);
    }
    if (key === 'ArrowDown') {
      if (!this.activeItems.top) return;
      const tempElem = this.activeItems.blank.cloneNode();
      this.container.insertBefore(tempElem, this.activeItems.top);
      this.container.insertBefore(this.activeItems.top, this.activeItems.blank);
      this.activeItems.blank.remove();
    }
    if (key === 'ArrowLeft') {
      console.log((this.activeItems.blankElemPosition - 3) % this.size);
      if ((this.activeItems.blankElemPosition - (this.size - 1)) % this.size === 0) return;
      this.container.insertBefore(this.activeItems.right, this.activeItems.blank);
    }
    if (key === 'ArrowUp') {
      if (!this.activeItems.bottom) return;
      const tempElem = this.activeItems.blank.cloneNode();
      this.container.insertBefore(tempElem, this.activeItems.bottom);
      this.container.insertBefore(this.activeItems.bottom, this.activeItems.blank);
      this.activeItems.blank.remove();
    }
    this.start();
  }
}

export default Game;
