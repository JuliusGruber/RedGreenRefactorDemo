const { add, subtract } = require('./calculator');

describe('Calculator', () => {
  describe('add', () => {
    it('should return the sum of two positive numbers', () => {
      // Arrange
      const a = 2;
      const b = 3;

      // Act
      const result = add(a, b);

      // Assert
      expect(result).toBe(5);
    });

    it('should return the sum when one number is negative', () => {
      // Arrange
      const a = -3;
      const b = 5;

      // Act
      const result = add(a, b);

      // Assert
      expect(result).toBe(2);
    });

    it('should return the sum when both numbers are negative', () => {
      // Arrange
      const a = -4;
      const b = -6;

      // Act
      const result = add(a, b);

      // Assert
      expect(result).toBe(-10);
    });

    it('should return the correct result when adding zero', () => {
      // Arrange & Act & Assert
      expect(add(5, 0)).toBe(5);
      expect(add(0, 5)).toBe(5);
      expect(add(0, 0)).toBe(0);
      expect(add(-3, 0)).toBe(-3);
      expect(add(0, -3)).toBe(-3);
      // Ensure string '0' is handled as numeric zero
      expect(add('0', 5)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two positive numbers', () => {
      // Arrange
      const a = 10;
      const b = 4;

      // Act
      const result = subtract(a, b);

      // Assert
      expect(result).toBe(6);
    });
  });
});
