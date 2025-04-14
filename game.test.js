import { Ship } from './src/ship.js'
import { Gameboard } from "./src/gameboard.js"
import { Position } from './src/position.js';


describe('Ship class tests', () => {
    let testship;
    beforeEach(() => {
        testship = new Ship(2);
    })

    test("hits don't exceed length", () => {
        testship.increaseHits();
        testship.increaseHits();
        testship.increaseHits();
        expect(testship.hits).toEqual(2);
    })

    test("isSunk returns false if ship has not been sunk", () => {
        testship.increaseHits();
        expect(testship.isSunk).toBe(false);
    })

    test("isSunk returns true if ship has been sunk", () => {
        testship.increaseHits();
        testship.increaseHits()
        expect(testship.isSunk).toBe(true);
    })
});


describe('Gameboard tests', () => {
    let testboard;
    beforeEach(() => {
        testboard = new Gameboard()
    })

    test("board game array is 100 items long", () => {
        expect(testboard.board.length === 100);
    })

    test.skip("ship placement function places a ship", () => {
        const ship = new Ship(5);
        testboard.placeShip(ship, 'A', 0, 'right');
        expect(testboard.board[0]).toEqual()
    })

    test.skip("there are no overlaps between ship positions after placement", () => {
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

    test.skip.each([
        {ship: new Position(0,0), expected: true}
    ])

    test.skip("the battleship's positions are inside the board", () => {
        const testboard = new Gameboard();
        testboard.battleship.place()
        testboard.carrier.place()
        testboard.cruiser.place()
        testboard.destroyer.place()
        testboard.submarine.place()

        test.

        expect();
    })

    test.skip("gameboard keeps track of missed attacks", () => {
        const testboard = new Gameboard();
        receiveAttack('A', 4);
        expect(testboard.missedAttacks).toEqual(['A', 4])
    })

    test.skip("receiveAttack records a hit if there's a ship there", () => {
        const testboard = new Gameboard();
        receiveAttack('A', 4);
        expect(testboard.board[4]).toEqual([])
    })

    test("gameboard reports true if all ships have sunk", () => {
        const testboard = new Gameboard();
        for (let i = 0; i < 5; i++) {
            testboard.carrier.increaseHits()
        }
        for (let i = 0; i < 4; i++) {
            testboard.battleship.increaseHits()
        }
        for (let i = 0; i < 3; i++) {
            testboard.cruiser.increaseHits()
            testboard.submarine.increaseHits()
        }
        for (let i = 0; i < 2; i++) {
            testboard.destroyer.increaseHits()
        }
        expect(testboard.allSunk).toBe(true);

    })

    test("gameboard reports false if all ships have sunk", () => {
        const testboard = new Gameboard();
        for (let i = 0; i < 5; i++) {
            testboard.carrier.increaseHits()
        }
        for (let i = 0; i < 4; i++) {
            testboard.battleship.increaseHits()
        }
        for (let i = 0; i < 3; i++) {
            testboard.cruiser.increaseHits()
            testboard.submarine.increaseHits()
        }
        for (let i = 0; i < 1; i++) {
            testboard.destroyer.increaseHits()
        }

        expect(testboard.allSunk).toBe(false);

    })

    test.skip("gameboard can select a random x and y coordinate within range", () => {
        const testboard = new Gameboard();
        expect(testboard.findRandomFreePosition(1).yPosition).toBeLessThanOrEqual(10)
    })

    test("placeShipOnCell places a ship on a cell", () => {
        const testboard = new Gameboard();
        testboard.placeShipOnCell('A', '1', testboard.battleship);
        expect(testboard.board[0][2]).toBe(testboard.battleship);
    })

})
