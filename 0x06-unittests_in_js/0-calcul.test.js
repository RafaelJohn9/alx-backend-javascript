#!/usr/bin/node

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('My test suite', () => {
  it('Tests whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(2, 2), 4);
    assert.strictEqual(calculateNumber(4, 3), 7);
    assert.strictEqual(calculateNumber(8, 3), 11);
  });

  it('Tests on a being float and b int', () => {
    assert.strictEqual(calculateNumber(1.5, 3), 5);
    assert.strictEqual(calculateNumber(3.5, 3), 7);
    assert.strictEqual(calculateNumber(1.6, 7), 9);
    assert.strictEqual(calculateNumber(0.3, 5), 5);
  });

  it('Tests on a being int and b being float', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(2, 3.6), 6);
    assert.strictEqual(calculateNumber(45, 3.7), 49);
    assert.strictEqual(calculateNumber(1, 4.7), 6);
  });

  it('Tests on a being float and b being float', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(1.5, 4.7), 7);
    assert.strictEqual(calculateNumber(3.5, 6.5), 11);
    assert.strictEqual(calculateNumber(1, 6.2), 7);
  });
});
