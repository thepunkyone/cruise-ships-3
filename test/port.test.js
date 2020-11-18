const Port = require('../src/port');

describe('Port', () => {
    it('returns an object', () => {
        
      expect(new Port('Liverpool')).toBeInstanceOf(Object);    
  });

  it('returns an object', () => {
    const port = new Port('Liverpool');
    expect (port.name).toEqual('Liverpool');   
});


});



