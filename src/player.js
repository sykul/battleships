import {Ship} from './ship.js'

class Player {
    constructor() {
        this.carrier = new Ship(5);
        this.battleship = new Ship(4);
        this.cruiser = new Ship(3);
        this.submarine = new Ship(3);
        this.destroyer = new Ship(2);
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



class HumanPlayer extends Player {

}

class ComputerPlayer extends Player {
    
}

export { Player }