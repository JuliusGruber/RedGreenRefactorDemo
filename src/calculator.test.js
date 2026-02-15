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
  });
});
