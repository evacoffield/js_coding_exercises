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

describe("createRange", () => {
    test("return error if not passed an argument", () => {
        expect(() => { createRange(); }).toThrow("start is required");
    });
    test("return error if arguments are not numbers", () => {
        expect(() => { createRange(['foo'], 10); }).toThrow("a start number is required");
        expect(() => { createRange(true, 10); }).toThrow("a start number is required");
        expect(() => { createRange(4, true); }).toThrow("an end number is required");
    });
    test("return error if end = start", () => {
        expect(() => {
            createRange(8, 8, 2);
        }).toThrow("end value is equal to start value");
    });
    test("return error if end < start", () => {
        expect(() => {
            createRange(8, 4, 2);
        }).toThrow("end value is less than start value");
    });
    test("return array with step of 1 for two arguments", () => {
        expect(createRange(4, 6)).toEqual([4, 5, 6]);
    });
    test("return array with step of 1 for three arguments", () => {
        expect(createRange(4, 6, 1)).toEqual([4, 5, 6]);
    });
    test("return array with specified step for three arguments", () => {
        expect(createRange(4, 10, 3)).toEqual([4, 7, 10]);
        expect(createRange(2, 10, 2)).toEqual([2, 4, 6, 8, 10]);
        expect(createRange(5, 25, 5)).toEqual([5, 10, 15, 20, 25]);
    });
    test("return array where step does not reach end of range", () => {
        expect(createRange(10, 15, 2)).toEqual([10, 12, 14]);
    });
});
