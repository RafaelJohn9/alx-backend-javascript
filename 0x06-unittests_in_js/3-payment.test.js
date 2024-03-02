const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')

describe("tests if the request sent to the API is correct", ()=>{
	it("Should log the correct outputs to the console", () => {
		let consoleLogSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(1000, 50);
		assert.strictEqual(consoleLogSpy.firstCall.args[0], `The total is: ${(new Utils).calculateNumber('SUM', 1000, 50)}`)
		consoleLogSpy.restore();
		consoleLogSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(2000, 500);
		assert.strictEqual(consoleLogSpy.firstCall.args[0], `The total is: ${(new Utils).calculateNumber('SUM', 2000, 500)}`)
		consoleLogSpy.restore();
		consoleLogSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(100, 50);
		assert.strictEqual(consoleLogSpy.firstCall.args[0], `The total is: ${(new Utils).calculateNumber('SUM', 100, 50)}`)
		consoleLogSpy.restore();
		consoleLogSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(200, 50);
		assert.strictEqual(consoleLogSpy.firstCall.args[0], `The total is: ${(new Utils).calculateNumber('SUM', 200, 50)}`)
	});
})
