class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.position = [];
    }

    hit() {
        if (this.hits < this.length) {
            this.hits = this.hits + 1;
        }
    }



    get isSunk() {
        if (this.hits < this.length) {
            return false;
        } else if (this.hits >= this.length) {
            return true;
        }
    }
}

class Gameboard {
    constructor() {
        this.carrier = new Ship(5);
        this.battleship = new Ship(4);
        this.cruiser = new Ship(3);
        this.submarine = new Ship(3);
        this.destroyer = new Ship(2);
        this.board = [];
        for (let letter of ['A','B','C','D','E','F','G','H','I','J']) {
            for (let number of ['1','2','3','4','5','6','7','8','9','10']) {
                this.board.push([letter, number]);
            }
        }
    }
}

const gb = new Gameboard()


export {Ship, Gameboard}