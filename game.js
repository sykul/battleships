class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        if (this.hits < this.length) {
            this.hits = this.hits + 1;
        }
    }

    get isSunk() {
        if (this.sunk === false) {
            return `Not yet`
        } else if (this.sunk === true) {
            return 'Sunk!'
        }
    }
}


export {Ship }