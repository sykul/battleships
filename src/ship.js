import { Position } from "./position";

class Ship {
    constructor(length, x=null, y=null, direction=null) {
        this.length = length;
        this.hits = 0;
        this.position = new Position(x,y);
        this.direction = direction;
    }

    increaseHits() {
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

export {Ship}