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