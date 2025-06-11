const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 for (1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 for (1, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 for (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 for (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return -3 for (-1.2, -2.5)', () => {
    assert.strictEqual(calculateNumber(-1.2, -2.5), -3);
  });

  it('should return 0 for (0.1, 0.3)', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('should return 2 for (0.9, 1.0)', () => {
    assert.strictEqual(calculateNumber(0.9, 1.0), 2);
  });
});
