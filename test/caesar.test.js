// This module is COMPLETE
const caesar = require("../src/caesar.js");
const expect = require("chai").expect;

describe("Ceaser Test", () => {
    it("If the shift value is equal to 0, return false", () => {
        const actual = caesar("thinkful", 0);
        expect(actual).to.be.false;
    });
    it("If the shift value is not present, return false", () => {
        const actual = caesar("thinkful", undefined);
        expect(actual).to.be.false;
    });
    it("If the shift value is less than -25, return false", () => {
        const actual = caesar("thinkful", -26);
        expect(actual).to.be.false;
    });
    it("If the shift value is more than 25, return false", () => {
        const actual = caesar("thinkful", 26);
        expect(actual).to.be.false;
    });
    it("Ignores capital letters", () => {
        const actual = caesar("THIS", 8);
        const expected = 'bpqa';
        expect(actual).to.eql(expected);
    });
    it("Spaces should be maintained throughout, as should other non-alphabetic symbols", () => {
        const actual = caesar("this is a secret message!", 8);
        const expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.eql(expected);
    });
    it("If a letter is shifted so that it goes off the alphabet (e.g. a shift of 3 on the letter z),\nit should wrap around to the front of the alphabet (e.g. z becomes c)", () => {
        const actual = caesar("z", 3);
        const expected = "c";
        expect(actual).to.eql(expected);
    });
})