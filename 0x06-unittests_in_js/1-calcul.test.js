const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return 6 when adding 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when adding 1.2 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return 0 when adding -0.4 and 0.4', () => {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -4 when subtracting 1.4 from 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 3 when subtracting 1.2 from 3.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
    });

    it('should return 0 when subtracting 0.4 from 0.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.4, 0.4), 0);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return 0.2 when dividing 1.4 by 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 2 when dividing 5.6 by 2.8', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.6, 2.8), 2);
    });
  });

  describe('Edge cases', () => {
    it('should throw error for invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), Error);
    });

    it('should handle large numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 999999999.4, 0.6), 1000000000);
    });

    it('should handle negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -2.5), 1);
    });
  });
});
