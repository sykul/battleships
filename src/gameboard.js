import { Player} from './player.js'

class Gameboard {
    constructor() {
        this.board = [];
        for (let letter of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']) {
            for (let number of ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']) {
                this.board.push({ x: letter, y: number, ship: null, hit: false });
            }
        }
        this.player1 = new Player();
        this.player2 = new Player();
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

    isShipInBounds(length, position, direction) {
        if (direction === "right") {
            let possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
            let letterPosition = possibleLetters.indexOf(position.x);
            let slicedArray = possibleLetters.slice(letterPosition, letterPosition + length);
            if (slicedArray.length === length) {
                return true;
            } else {
                return false;
            }
        } else if (direction === "up") {
            if (length <= Number(position.y)) {
                return true;
            } else if (length > Number(position.y)) {
                return false;
            }
            
        } else if (direction === "left") {
            const possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
            let letterPosition = possibleLetters.indexOf(position.x);
            if (letterPosition - length < 0) {
                return false;
            } else if (letterPosition - length >= 0) {
                return true;
            }
        } else if (direction === "down") {

        } else {
            throw "invalid error";
        }
    }

    placeFullShip(shipObj, position, direction) {
        if (checkSpaces(shipObj.length, position, direction) === true)
        return;
    }

    isSpaceInBounds(position) {
        if (Number.isInteger(Number(position.y))
            && ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].some((x) => x === position.x)
            && 1 <= Number(position.y) && Number(position.y) <= 10
        ) {
            return true;
        } else {
            return false;
        }
    }



}

export { Gameboard }