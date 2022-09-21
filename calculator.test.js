const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test.skip('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test.skip('can add two large positive numbers', () => { 
    expected = 400;
    actual = sum(100, 300);
    expect(actual).toBe(expected);
  });

  test.skip('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-5, -5);
    expect(actual).toBe(expected);
  });

  test.skip('can add zero', () => {
    expected = 67;
    actual = sum(67, 0);
    expect(actual).toBe(expected);
  });
});

describe('subtract', () => {
  test.skip('can subtract two numbers', () => {
    expected = 4;
    actual = subtract(10, 6);
    expect(actual).toBe(expected);
  });

  test.skip('can subtract zero from a value', () => {
    expected = 67;
    actual = subtract(67, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test.skip('can multiply two numbers', () => {
    expected = 16;
    actual = multiply(4, 4);
    expect(actual).toBe(expected);
  });

  test.skip('can multiply two negative numbers', () => {
    expected = 60;
    actual = multiply(-10, -6);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {
  test.skip('can divide two numbers', () => {
    expected = 4;
    actual = divide(16, 4);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {
  test.skip('find modulus between two values', () => {
    expected = 1;
    actual = modulus(13, 3);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {
  test('see if this number is even', () => {
    expected = true;
    actual = even(12000);
    expect(actual).toBe(expected);
  });
});

describe('odd', () => {
  test('see if this number is odd', () => {
    expected = true;
    actual = odd(1235431);
    expect(actual).toBe(expected);
  });

});
