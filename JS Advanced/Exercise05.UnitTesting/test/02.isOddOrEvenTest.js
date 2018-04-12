let expect = require('chai').expect;
let isOddOrEven = require('../p02_EvenOrOdd').isOddOrEven;

describe('evenOrOdd', function(){
    it('should return undefined with a number parameter', function () {
        expect(isOddOrEven(12)).to.be.equal(undefined);
    });
    it('should return undefined with an object parameter', function () {
        expect(isOddOrEven({name: 'Pesho'})).to.be.equal(undefined);
    });
    it('should return correct result with an even length string', function () {
        expect(isOddOrEven('hi')).to.be.equal('even');
    });
    it('should return correct result with an odd length string', function () {
        expect(isOddOrEven('hello')).to.be.equal('odd');
    });
});