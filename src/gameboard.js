import { Ship } from './ship.js'

class Gameboard {
    constructor() {
        this.board = [];
        for (let letter of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']) {
            for (let number of ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']) {
                this.board.push({ x: letter, y: number, ship: null, hit: false });
            }
        }
    }

    findRandomPosition(shipLength) {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        const xPosition = possibleLetters[getRandomInt(1, 10)]
        const yPosition = getRandomInt(1, 10)


        /* Select random coordinate
        If coordinate taken, return false
        If coordinate free, pick random direction (store in variable)
        Check (length of ship)-1 places in that direction
        If any coordinate taken, start again
        If no coordinates taken, set ship.position to coordinates
        Return length of ship, coordinates, and direction
         */
        return { xPosition: xPosition, yPosition: yPosition }
    }

    placeShipOnCell(shipObj, position) {
        let cell = this.board.find((e) => {
            return (e.x == position.x && e.y == position.y);
        });
        cell.ship = shipObj;
    }

    checkSpaces(length, position, direction) {
        if (direction === "right") {
            for (i=0; i<length; i++) {
                const possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
                possibleLetters.find((e) => {position.x === e})
            }
        } else if (direction === "up") {

        } else if (direction === "left") {

        } else if (direction === "down") {

        } else {
            throw "invalid error";
        }
    }

    placeFullShip(shipObj, position, direction) {
        if (checkSpaces(shipObj.length, position, direction) === true)
        return;
    }

    isInBounds(position) {
        if (Number.isInteger(Number(position.y))
            && ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].some((x) => x === position.x)
            && 1 <= Number(position.y) && Number(position.y) <= 10
        ) {
            return true;
        } else {
            return false;
        }
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

export { Gameboard }