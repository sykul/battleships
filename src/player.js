class Player {
    constructor() {
        this.carrier = new Ship(5);
        this.battleship = new Ship(4);
        this.cruiser = new Ship(3);
        this.submarine = new Ship(3);
        this.destroyer = new Ship(2);
    }
}

class HumanPlayer extends Player {

}

class ComputerPlayer extends Player {
    
}

export { Player }