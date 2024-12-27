import {Ship, Gameboard} from "./game.js"

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

test("there are no overlaps between ship positions after placement", () => {
    function arrayIntersect(arr1, arr2) {
        const set = new Set(arr2);
        return arr1.some(item => set.has(item))
    }
    const gameboard = new Gameboard();
    expect(arrayIntersect([], [])).toBeFalsy();
})

test("all ship positions are inside the board", () => {

})