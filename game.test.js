import { Ship } from './src/ship.js'
import { Gameboard } from "./src/gameboard.js"
import { Position } from './src/position.js';

describe('Ship initialisation tests', () => {

    test("ship has length when initialised with length, position and direction", () => {
        let testship = new Ship(2, 'A', '1', 'down');
        expect(testship.length).toEqual(2);
    })

    test("ship has position when initialised with length, position and direction", () => {
        let testship = new Ship(2, 'A', '1', 'down');
        expect(testship.position.position).toEqual(['A', '1']);
    })

    test("ship has direction when initialised with length, position and direction", () => {
        let testship = new Ship(2, 'A', '1', 'down');
        expect(testship.direction).toEqual('down');
    })

    test("ship has position when initialised with length, position", () => {
        let testship = new Ship(2, 'A', '1');
        expect(testship.position.position).toEqual(['A', '1']);
    })

    test("ship has direction when initialised with length, position", () => {
        let testship = new Ship(2, 'A', '1');
        expect(testship.direction).toEqual(null);
    })

    test("ship has length when initialised with length", () => {
        let testship = new Ship(2);
        expect(testship.length).toEqual(2);
    })

})


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


describe('Gameboard initialisation tests', () => {
    let testboard;
    beforeEach(() => {
        testboard = new Gameboard()
    })

    test("board game array is 100 items long", () => {
        expect(testboard.board.length === 100);
    })

});

describe('Ship placement tests', () => {
    let testboard;
    beforeEach(() => {
        testboard = new Gameboard()
    })

    test("ship placement function places a ship on a cell", () => {
        const testship = new Ship(5);
        testboard.placeShipOnCell(testship, new Position('A','1'));
        expect(testboard.board[0].ship).toEqual(testship)
    })

    test.skip("there are no overlaps between ship positions after placement", () => {
        testboard.player1.battleship.place()
        testboard.player1.carrier.place()
        testboard.player1.cruiser.place()
        testboard.player1.destroyer.place()
        testboard.player1.submarine.place()

        function arrayIntersect(arr1, arr2) {
            const set = new Set(arr2);
            return arr1.some(item => set.has(item))
        }

        expect(arrayIntersect(gameboard.battleship.position, gameboard.carrier.position)).toBeFalsy();
    })

    test.each([
        { position: new Position('A', '1'), expected: true },
        { position: new Position('A', '1'), expected: true },
        { position: new Position('Z', '10'), expected: false },
        { position: new Position('J', '1'), expected: true },
        { position: new Position('K', '1'), expected: false },
        { position: new Position('A', '11'), expected: false },
        { position: new Position('a', '1'), expected: false },
        { position: new Position('A', '-1'), expected: false },
    ]) ('isSpaceInBounds detects when a single position is out of bounds: %o', ({position, expected}) => {
        expect(testboard.isSpaceInBounds(position)).toBe(expected);
    });

    test.each([
        { shipLength: 2, position: new Position('A', '1'), direction: "right", expected: true },
        { shipLength: 2, position: new Position('D', '4'), direction: "left", expected: true },
        { shipLength: 2, position: new Position('J', '2'), direction: "up", expected: true },
        { shipLength: 2, position: new Position('A', '9'), direction: "down", expected: true },
        { shipLength: 3, position: new Position('I', '1'), direction: "right", expected: false },
        { shipLength: 3, position: new Position('A', '4'), direction: "left", expected: false },
        { shipLength: 3, position: new Position('D', '1'), direction: "up", expected: false },
        { shipLength: 3, position: new Position('I', '9'), direction: "down", expected: false },
    ]) ('isShipInBounds detects when a position is out of bounds: %o', ({shipLength, position, direction, expected}) => {
        expect(testboard.isShipInBounds(shipLength, position, direction)).toBe(expected);
    });

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
        testboard.player1.carrier.increaseHits()
    }
    for (let i = 0; i < 4; i++) {
        testboard.player1.battleship.increaseHits()
    }
    for (let i = 0; i < 3; i++) {
        testboard.player1.cruiser.increaseHits()
        testboard.player1.submarine.increaseHits()
    }
    for (let i = 0; i < 2; i++) {
        testboard.player1.destroyer.increaseHits()
    }
    expect(testboard.player1.allSunk).toBe(true);

})

test("gameboard reports false if all ships have sunk", () => {
    const testboard = new Gameboard();
    for (let i = 0; i < 5; i++) {
        testboard.player1.carrier.increaseHits()
    }
    for (let i = 0; i < 4; i++) {
        testboard.player1.battleship.increaseHits()
    }
    for (let i = 0; i < 3; i++) {
        testboard.player1.cruiser.increaseHits()
        testboard.player1.submarine.increaseHits()
    }
    for (let i = 0; i < 1; i++) {
        testboard.player1.destroyer.increaseHits()
    }

    expect(testboard.player1.allSunk).toBe(false);

})

test.skip("gameboard can select a random x and y coordinate within range", () => {
    const testboard = new Gameboard();
    expect(testboard.findRandomFreePosition(1).yPosition).toBeLessThanOrEqual(10)
})
