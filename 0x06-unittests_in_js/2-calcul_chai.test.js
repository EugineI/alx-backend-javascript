const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with Chai', () => {
  describe('SUM operation', () => {
    it('should return 6 when adding 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when adding 1.2 and 3.7', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return 0 when adding -0.4 and 0.4', () => {
      expect(calculateNumber('SUM', -0.4, 0.4)).to.equal(0);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -4 when subtracting 1.4 from 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 3 when subtracting 1.2 from 3.7', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
    });

    it('should return 0 when subtracting 0.4 from 0.4', () => {
      expect(calculateNumber('SUBTRACT', 0.4, 0.4)).to.equal(0);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return 0.2 when dividing 1.4 by 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 2 when dividing 5.6 by 2.8', () => {
      expect(calculateNumber('DIVIDE', 5.6, 2.8)).to.equal(2);
    });
  });

  describe('Edge cases', () => {
    it('should throw error for invalid type', () => {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw(Error);
    });

    it('should handle large numbers correctly', () => {
      expect(calculateNumber('SUM', 999999999.4, 0.6)).to.equal(1000000000);
    });

    it('should handle negative numbers correctly', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -2.5)).to.equal(1);
    });
  });
});
