// This module is COMPLETE
const expect = require("chai").expect;
const substitution = require("../src/substitution.js");

describe("Substitution Test", () => {
    it("Spaces should be maintained throughout", () => {
        const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    });
    it("Capital letters can be ignored", () => {
        const actual = substitution("YOU", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp";
        expect(actual).to.equal(expected);
    });
    it("The alphabet parameter must be string of exactly 26 characters. Otherwise, it should return false", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnpzibev");
        expect(actual).to.be.false;
    });
    it("All of the characters in the alphabet parameter must be unique. Otherwise, it should return false", () => {
        const actual = substitution("thinkful", "xoyqmcgrukxwaxlnyhdjpzibev");
        expect(actual).to.be.false;
    });
    it("Ensure the decode works properly as well", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
    })
})