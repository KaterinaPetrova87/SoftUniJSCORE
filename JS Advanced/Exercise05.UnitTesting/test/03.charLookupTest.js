let expect = require('chai').expect;
let lookupChar = require('../p03_CharLookup').lookupChar;

describe('lookupChar', function () {
    it('should return undefined', function () {
        expect(lookupChar(1, 1)).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(lookupChar('pesho', 'pesho')).to.be.equal(undefined);
    });
    it('should return Incorrect index', function () {
        expect(lookupChar('hello', 11)).to.be.equal('Incorrect index');
    });
    it('should return Incorrect index', function () {
        expect(lookupChar('hello', 5)).to.be.equal('Incorrect index');
    });
    it('should return Incorrect index', function () {
        expect(lookupChar('hello', -2)).to.be.equal('Incorrect index');
    });
    it('should return undefined', function () {
        expect(lookupChar('hello', 2.5)).to.be.equal(undefined);
    });
    it('should return correct value', function () {
        expect(lookupChar('hello', 1)).to.be.equal('e');
    });
});