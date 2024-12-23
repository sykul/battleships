import {Ship} from "./game.js"

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