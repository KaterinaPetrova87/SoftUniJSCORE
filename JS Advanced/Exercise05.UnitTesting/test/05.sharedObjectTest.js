let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let sharedObject = require('../p05_SharedObject').sharedObject;

document.body.innerHTML = `<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`;

describe('sharedObject', function () {
    before(() => global.$ = $);
    describe('Initial values', function () {
        it('should be null', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('should be null', function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe('changeName function', function () {
        it('should return number for number parameter', function () {
            sharedObject.changeName(15);
            expect(sharedObject.name).to.equal(15);
            expect($('#name').val()).to.equal('15');
        });
        it('should be null', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('should not be null', function () {
            sharedObject.changeName('Pesho');
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal('Pesho');
            expect($('#name').val()).to.be.equal('Pesho');
        });
        it('should not be null', function () {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho');
            expect($('#name').val()).to.be.equal('Pesho');
        });
    });
    describe('changeIncome function', function () {
        it('should be null', function () {
            sharedObject.changeIncome('str');
            expect(sharedObject.income).to.be.null;
        });
        it('should be null', function () {
            sharedObject.changeIncome(-3);
            expect(sharedObject.income).to.be.null;
        });
        it('should be null', function () {
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.null;
        });
        it('should not be null', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5);
            expect($('#income').val()).to.be.equal('5');
        });
        it('should not be null', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-3);
            expect(sharedObject.income).to.be.equal(5);
            expect($('#income').val()).to.be.equal('5');
        });
    });
    describe('updateName function', function () {
        it('should change name', function () {
            sharedObject.changeName('Pesho');
            $("#name").val('Stamat');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Stamat');
            expect($("#name").val()).to.equal('Stamat');
        });
        it('should not change name', function () {
            sharedObject.changeName('Pesho');
            $("#name").val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Pesho');
            expect($("#name").val()).to.equal('');
        });
    });
    describe("updateIncome function", function () {
        it('should return previous value if value is NaN', function () {
            sharedObject.changeIncome(15);
            $("#income").val('abc');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(15);
            expect($("#income").val()).to.equal('abc');
        });
        it('should return previous value if value is floating point number', function () {
            sharedObject.changeIncome(15);
            $("#income").val('3.6');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(15);
            expect($("#income").val()).to.equal('3.6');
        });
        it("should return previous value if value is negative number", function () {
            sharedObject.changeIncome(15);
            $("#income").val('-3');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(15);
            expect($("#income").val()).to.equal('-3');
        });
        it('should return previous value if value is 0', function () {
            sharedObject.changeIncome(15);
            $("#income").val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(15);
            expect($("#income").val()).to.equal('0');
        });
        it('should return correct value', function () {
            sharedObject.changeIncome(15);
            $("#income").val('20');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(20);
            expect($("#income").val()).to.equal('20');
        })
    });
});