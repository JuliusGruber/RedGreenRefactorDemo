function add(a, b) {
  // Only handles positive numbers for now
  if (a < 0 || b < 0) {
    throw new Error('Negative numbers not supported yet');
  }
  return a + b;
}

module.exports = { add };
