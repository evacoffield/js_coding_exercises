const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("return error if not passed an argument", () => {
        expect(() => { sumDigits(); }).toThrow("n is required");
    });
    test("return error if is not a number", () => {
        expect(() => { sumDigits('foo'); }).toThrow("a number is required");
        expect(() => { sumDigits(['foo']); }).toThrow("a number is required");
        expect(() => { sumDigits(true); }).toThrow("a number is required");
    });
    test("return sum for single digit", () => {
        expect(sumDigits(5)).toBe(5);
    });
    test("return sum of multiple digits", () => {
        expect(sumDigits(2)).toBe(2);
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(1054)).toBe(10);
    });
    test("return error if n is a negative number", () => {
        expect(() => { sumDigits(-12); }).toThrow("n must be a positive integer");
    });
});