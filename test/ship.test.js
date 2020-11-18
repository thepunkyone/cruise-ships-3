const Ship = require('../src/ship');

describe('Ship', () => {
    it('returns an object', () => {
      expect(new Ship('Belfast')).toBeInstanceOf(Object);    
  });

  it('returns 0 passengers', () => {
      const ship = new Ship('Belfast');
      expect (ship.passengers).toEqual(0);
});

it('returns departing port', () => {
    const ship = new Ship('Belfast');
    expect (ship.departingPort).toEqual('Belfast');
});
});

describe('sail', () => {
    it('can set sail', () => {
        const ship = new Ship('Belfast');

        ship.sail();
        expect(ship.departingPort).toBeFalsy();
        expect(ship.dockingPort).toBeFalsy();
    });
});

describe('dock', () => {
    it('can dock at a port', () => {
        const ship = new Ship();

        ship.dock('Liverpool');
        expect(ship.dockingPort).toBe('Liverpool');
    });
});

