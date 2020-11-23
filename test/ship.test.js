const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');



describe('Ship', () => {
    it('returns an object', () => {
      expect(new Ship('Belfast')).toBeInstanceOf(Object);    
  });


it('returns current port', () => {

    const ship = new Ship('Belfast');
    const port = new Port('Belfast');
    const ship = new Ship(port);

    expect(ship.currentPort).toBe('Belfast');
    expect(ship.currentPort).toBe(port);
});
});

describe('sail', () => {
    it('can set sail', () => {
        const ship = new Ship('Belfast');

        ship.sail();
        expect(ship.currrentPort).toBeFalsy();
    });
});

describe('dock', () => {
    it('can dock at a port', () => {
        const ship = new Ship();

        ship.dock('Liverpool');
        expect(ship.dockingPort).toBe('Liverpool');
    });
});
