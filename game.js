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
    findRandomFreePosition(shipLength) {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const possibleLetters = ['A','B','C','D','E','F','G','H','I','J']
        const xPosition = possibleLetters[getRandomInt(1,10)]
        const yPosition = getRandomInt(1,10)
        /* Select random coordinate
        If coordinate taken, start again
        If coordinate free, pick random direction (store in variable)
        Check (length of ship)-1 places in that direction
        If any coordinate taken, start again
        If no coordinates taken, set ship.position to coordinates
        Return length of ship, coordinates, and direction
         */
        return {xPosition: xPosition, yPosition: yPosition}
    }

    placeShip(shipObj, x, y, direction) {

    }

    get allSunk() {
        if (this.carrier.isSunk === true
            && this.battleship.isSunk === true
            && this.cruiser.isSunk === true
            && this.destroyer.isSunk === true
            && this.submarine.isSunk === true
        ) {
            return true;
        } else {
            return false;
        }
    }

}

class Player {
    constructor() {
        
    }
}

class HumanPlayer extends Player {

}

class ComputerPlayer extends Player {

}

const gb = new Gameboard()


export {Ship, Gameboard}