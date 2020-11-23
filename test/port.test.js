const Port = require('../src/port');

describe('Port', () => {
    it('returns an object', () => {
        
      expect(new Port('Liverpool')).toBeInstanceOf(Object);    
  });

  it('contains a port property', () => {
    const port = new Port('Liverpool');
    expect (port.name).toEqual('Liverpool');   
});
});


describe('addShip', () => {
it('can add a ship', () => {
  const port = new Port('Belfast');
  const ship = {};

  port.addShip(ship);

  expect(port.ships).toContain(ship);
});

});

describe('removeShip', () => {
  it('can remove a ship', () => {
    const port = new Port('Belfast');
    const ship = {};
  
    port.removeShip(ship);
  
    expect(port.ships).toEqual([]);
  });
});