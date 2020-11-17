const Ship = require('../src/ship');

describe('Ship', () => {
    it('returns an object', () => {
      expect(new Ship('Belfast')).toBeInstanceOf(Object);    
  });

  it('returns 0 passengers', () => {
      const ship = new Ship('Belfast');
      expect (ship.passengers).toEqual(0);
});

it('returns starting port', () => {
    const ship = new Ship('Belfast');
    expect (ship.currentPort).toEqual('Belfast');
});
});

describe('startJourney', () => {
    it('can start journey', () => {
        const ship = new Ship('Belfast');

        ship.startJourney();
        expect(ship.currentPort).toBeFalsy();
    });
});

