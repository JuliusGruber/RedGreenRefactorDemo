const { add } = require('./calculator');

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
  });
});
