const {
    sumMultiples,
    areWeCovered,
    createMatrix,
    isValidDNA,
    getComplementaryDNA,
    isItPrime
} = require("../challenges/exercise006");

describe("isValidDNA", () => {
    test("return error if not passed an argument", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");
    });
    test("return error if not passed a string.", () => {
        expect(() => {
            isValidDNA(['foo']);
        }).toThrow("a string is required");

        expect(() => {
            isValidDNA(7);
        }).toThrow("a string is required");

        expect(() => {
            isValidDNA(true);
        }).toThrow("a string is required");
    });
    test("returns true if string has only  C, G, T or A", () => {
        expect(isValidDNA("CGTATAG")).toBe(true);
        expect(isValidDNA("CGT")).toBe(true);
        expect(isValidDNA("C")).toBe(true);
    });
    test("returns false if string has characters other than  C, G, T or A", () => {
        expect(isValidDNA(" ")).toBe(false);
        expect(isValidDNA("RE")).toBe(false);
        expect(isValidDNA("TUI")).toBe(false);
        expect(isValidDNA("TGCW")).toBe(false);
        expect(isValidDNA("CGTA CG")).toBe(false);
    });
    test("return false if string is lowercase", () => {
        expect(isValidDNA('cgTA')).toBe(false);
    });
});

describe("createMatrix", () => {
    it("returns a matrix of 1 * 1 when passed 1", () => {
        const result = createMatrix(1, "foo");
        const expected = [["foo"]]; // <= complex values
        expect(result).toEqual(expected);
    });
});

describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("an Array is required");

        expect(() => {
            sumMultiples(4);
        }).toThrow("an Array is required");
    });
    test("it returns the sum of any number that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("it works okay with decimal number", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });

    test("return 0 if there are no multiptles of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});

describe("areWeCovered", () => {
    test("it return false if there are no staff at all", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });
    test("return false if there are staff but < 3 not scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Tuesday"] },
            { name: "sally", rota: ["Monday", "Tuesday"] },
            { name: "jess", rota: ["Monday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
    });
});