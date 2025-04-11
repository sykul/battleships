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

export {Ship}