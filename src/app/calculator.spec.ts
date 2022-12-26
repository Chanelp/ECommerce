import { Calculator } from './calculator';

describe('Test for calculator', () => {
  describe('Test for multiply', () => {
    it('#Multiply should return nine', () => {
      //Arrange
      const cal = new Calculator();

      //Act
      const rta = cal.multiply(3, 3);

      //Assert
      expect(rta).toBe(9);
    });
  });

  describe('Test for divide', () => {
    it('#Divide should return a some numbers', () => {
      //Arrange
      const calc = new Calculator();

      //Act
      expect(calc.divide(6, 3)).toEqual(2);
      expect(calc.divide(5, 2)).toEqual(2.5);
    });

    it('#Divide for a zero', () => {
      //Arrange
      const cal = new Calculator();

      //Act
      expect(cal.divide(8, 0)).toBeNull();
      expect(cal.divide(5535351328, 0)).toBeNull();
    });
  });

  // MATCHERS
  it('tests matchers', () => {
    const name1 = 'Charlotte';
    let name2;

    expect(name1).toBeDefined();
    expect(name2).toBeUndefined();

    expect(1 + 3 === 4).toBeTruthy();
    expect(1 + 1 === 4).toBeFalsy();

    expect(5).toBeLessThan(10);
    expect(20).toBeGreaterThan(10);

    expect('12345').toMatch(/123/);
    expect(['apples', 'oranges', 'grappes']).toContain('oranges');
  });
});
