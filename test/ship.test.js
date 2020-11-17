const Ship = require('../src/ship');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Ship('Titanic, Belfast')).toBeInstanceOf(Object);    
  });

  it('returns 0 passengers', () => {
      const ship = new Ship('Titanic');
      expect (ship.passengers).toEqual(0);
});
});