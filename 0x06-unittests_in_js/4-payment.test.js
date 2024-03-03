const sinon = require('sinon');
const assert = require('assert');
const { expect } = import('chai');
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')

describe("tests if the request sent to the API is correct", ()=>{
	it("Stubbing utils.calculateNumber to return a certain value", () =>{
		const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
		const consoleSpy = sinon.spy(console, 'log');

		sendPaymentRequestToApi(100, 20);

		assert.strictEqual(stub.calledWithExactly('SUM', 100, 20), true);
		assert.strictEqual((stub.callCount), 1);

		assert.strictEqual(consoleSpy.calledWithExactly('The total is: 10'), true);
		sinon.assert.calledOnce(consoleSpy);

		stub.restore();
		consoleSpy.restore();

	});

});
