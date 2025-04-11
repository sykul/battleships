import {Ship} from './src/ship.js'
import {Gameboard} from "./src/gameboard.js"

test("test suite set up correctly", () => {
    expect(Ship).toBeTruthy();
})

test("hits don't exceed length", () => {
    const testship = new Ship(2);
    testship.hit();
    testship.hit();
    testship.hit();
    expect(testship.hits).toEqual(2);
})

test("isSunk returns false if ship has not been sunk", () => {
    const testship = new Ship(2);
    testship.hit();
    expect(testship.isSunk).toBe(false);
})

test("isSunk returns true if ship has been sunk", () => {
    const testship = new Ship(2);
    testship.hit();
    testship.hit()
    expect(testship.isSunk).toBe(true);
})

test("board game array is 100 items long", () => {
    const testboard = new Gameboard();
    expect(testboard.board.length === 100);
})

test.skip("ship placement function places a ship", () => {
    const testboard = new Gameboard();
    const ship = new Ship(5);
    testboard.placeShip(ship, 'A', 0, 'right');
    expect(testboard.board[0]).toEqual()
})

test.skip("there are no overlaps between ship positions after placement", () => {
    const testboard = new Gameboard();
    testboard.battleship.place()
    testboard.carrier.place()
    testboard.cruiser.place()
    testboard.destroyer.place()
    testboard.submarine.place()

    function arrayIntersect(arr1, arr2) {
        const set = new Set(arr2);
        return arr1.some(item => set.has(item))
    }

    expect(arrayIntersect(gameboard.battleship.position, gameboard.carrier.position)).toBeFalsy();
})

test.skip("the battleship's positions are inside the board", () => {
    const testboard = new Gameboard();
    testboard.battleship.place()
    testboard.carrier.place()
    testboard.cruiser.place()
    testboard.destroyer.place()
    testboard.submarine.place()

    expect();
})

test.skip("gameboard keeps track of missed attacks", () => {
    const testboard = new Gameboard();
    receiveAttack('A',4);
    expect(testboard.missedAttacks).toEqual(['A',4])
})

test.skip("receiveAttack records a hit if there's a ship there", () => {
    const testboard = new Gameboard();
    receiveAttack('A',4);
    expect(testboard.board[4]).toEqual([])
})

test("gameboard reports true if all ships have sunk", () => {
    const testboard = new Gameboard();
    for (let i = 0; i<5; i++) {
        testboard.carrier.hit()
    }
    for (let i = 0; i<4; i++) {
        testboard.battleship.hit()
    }
    for (let i = 0; i<3; i++) {
        testboard.cruiser.hit()
        testboard.submarine.hit()
    }
    for (let i = 0; i<2; i++) {
        testboard.destroyer.hit()
    }
    expect(testboard.allSunk).toBe(true);

})

test("gameboard reports false if all ships have sunk", () => {
    const testboard = new Gameboard();
    for (let i = 0; i<5; i++) {
        testboard.carrier.hit()
    }
    for (let i = 0; i<4; i++) {
        testboard.battleship.hit()
    }
    for (let i = 0; i<3; i++) {
        testboard.cruiser.hit()
        testboard.submarine.hit()
    }
    for (let i = 0; i<1; i++) {
        testboard.destroyer.hit()
    }
    
    expect(testboard.allSunk).toBe(false);

})

test.skip("gameboard can select a random x and y coordinate within range", () => {
    const testboard = new Gameboard();
    expect(testboard.findRandomFreePosition(1).yPosition).toBeLessThanOrEqual(10)
})

test("placeShipOnCell places a ship on a cell", () => {
    const testboard = new Gameboard();
    testboard.placeShipOnCell('A','1',testboard.battleship);
    expect(testboard.board[0][2]).toBe(testboard.battleship);
})

test.skip("", () => {
    
})

test.skip("", () => {
    
})

test.skip("", () => {
    
})

test.skip("", () => {
    
})

test.skip("", () => {
    
})

test.skip("", () => {
    
})