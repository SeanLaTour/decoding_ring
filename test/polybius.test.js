// This module is COMPLETE
const polybius = require("../src/polybius.js");
const expect = require("chai").expect;

describe("Polybius Test", () => {
    it("When encoding, your output should still be a string", () => {
        const actual = polybius("thinkful"); 
        expect(actual).to.be.a("string");
    });
    it("When decoding, the number of characters in the string excluding spaces should be even (Part 1)", () => {
        const actual = polybius("3251 13 136", false);
        expect(actual).to.be.false;
    });
    it("Spaces should be maintained throughout", () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = "hello world";
        expect(actual).to.equal(expected);
    });
    it("Capital letters can be ignored", () => {
        const actual = polybius("HELLO world");
        const expected = '3251131343 2543241341'
        expect(actual).to.equal(expected);
    });
    it("The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    });
})