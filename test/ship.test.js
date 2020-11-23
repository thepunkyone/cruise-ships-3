const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');



describe('Ship', () => {
    it('returns an object', () => {
      
        const port = new Port('Belfast');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });

it('can have ports', () => {

    const belfast = new Port('Belfast');
    const liverpool = new Port('Liverpool');

    const itinerary = new Itinerary([belfast, liverpool]);
    expect(itinerary.ports).toEqual([belfast, liverpool]);
});

it('has a starting port', () => {
    const port = new Port('Belfast');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
  
    expect(ship.currentPort).toBe(port);
  });

  it('cant sail further than its itinerary', () => {
    const belfast = new Port('Belfast');
    const liverpool = new Port('Liverpool');
    const itinerary = new Itinerary([belfast, liverpool]);
    const ship = new Ship(itinerary);
  
    ship.sail();
    ship.dock();
  
    expect(() => ship.sail()).toThrowError('End of itinerary reached');
  });

  it('gets added to port on instantiation', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);
  
    expect(dover.ships).toContain(ship);
  });
});

describe('sail', () => {
    it('can set sail', () => {
            const belfast = new Port('Belfast');
            const liverpool = new Port('Liveprool');
            const itinerary = new Itinerary([belfast, liverpool]);
            const ship = new Ship(itinerary);
          
            ship.sail();
          
            expect(ship.currentPort).toBeFalsy();
            expect(belfast.ships).not.toContain(ship);
          });
});

describe('dock', () => {
    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais])
        const ship = new Ship(itinerary);
      
        ship.sail();
        ship.dock();
      
        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
      });
});