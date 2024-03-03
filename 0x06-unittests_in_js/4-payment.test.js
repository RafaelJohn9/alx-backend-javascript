const sinon = require('sinon');
const assert = require('assert');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')

describe("tests if the request sent to the API is correct", ()=>{
	it("Should log the correct outputs to the console", () => {
		const consoleLogSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(1000, 50);
		assert.strictEqual(consoleLogSpy.firstCall.args[0], `The total is: ${Utils.calculateNumber('SUM', 1000, 50)}`)
		consoleLogSpy.restore();
	});
	it("Should log the correct outputs to the console", () => {
		const consoleLogSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(2000, 500);
		assert.strictEqual(consoleLogSpy.firstCall.args[0], `The total is: ${Utils.calculateNumber('SUM', 2000, 500)}`)
		consoleLogSpy.restore();
	});
	it("Should log the correct outputs to the console", () => {
		const consoleLogSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(100, 50);
		assert.strictEqual(consoleLogSpy.firstCall.args[0], `The total is: ${Utils.calculateNumber('SUM', 100, 50)}`)
		consoleLogSpy.restore();
	});
	it("Should log the correct outputs to the console", () => {
		const consoleLogSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(200, 50);
		assert.strictEqual(consoleLogSpy.firstCall.args[0], `The total is: ${Utils.calculateNumber('SUM', 200, 50)}`)
		consoleLogSpy.restore();
	});
	it('should call Utils.calculateNumber with SUM type and correct arguments', () => {
		const calculateNumberSpy = sinon.spy(Utils);
		sendPaymentRequestToApi(100, 20);
		expect(calculateNumberSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
		expect(calculateNumberSpy.calculateNumber.callCount).to.be.equal(1);
		calculateNumberSpy.calculateNumber.restore();
	});

	it("Stubbing utils.calculateNumber to return a certain value", () =>{
		const stub = sinon.stub(Utils, "calculateNumber");
		stub.returns(10);
		stub.assert.calledWith(stub,"SUM", 100, 20);
		const consoleLogSpy = sinon.spy(console, "log");
		sendPaymentRequestToApi(100, 20);
		assert.strictEqual(consoleLogSpy.firstCall.args[0], `The total is: 10`)
		stub.restore()
		consoleLogSpy.restore();
	});

})
