const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("tests the calculateNumber function", () =>{
	it ('tests for addition mixed cases' () =>{
		assert.strictEqual(calculateNumber('SUM', 10, 10), 20);
		assert.strictEqual(calculateNumber('SUM', 10.5, 11), 22);
		assert.strictEqual(calculateNumber('SUM', 10.5, 13.5), 25);
		assert.strictEqual(calculateNumber('SUM', 3, 1.3), 4);
	});

	it ('tests for addition mixed cases' () =>{
		assert.strictEqual(calculateNumber('DIVIDE', 10, 10), 1);
		assert.strictEqual(calculateNumber('DIVIDE', 10.5, 0), 'Error');
		assert.strictEqual(calculateNumber('DIVIDE', 10, 5), 2);
		assert.strictEqual(calculateNumber('DIVIDE', 3, 1.3), 1.5);
	});

	it ('tests for addition mixed cases' () =>{
		assert.strictEqual(calculateNumber('SUBTRACT', 10, 10), 0);
		assert.strictEqual(calculateNumber('SUBTRACT', 10.5, 11), 0);
		assert.strictEqual(calculateNumber('SUBTRACT', 10.5, 13.5), -3);
		assert.strictEqual(calculateNumber('SUBTRACT', 3, 1.3), 2);
	});

});
