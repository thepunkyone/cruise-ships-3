const Itinerary = require('../src/itinerary');

describe('Itinerary', () => {
    it('returns an object', () => {
      expect(new Itinerary()).toBeInstanceOf(Object);    
  });  

it('contains a ports property', () => {
    const itinerary = new Itinerary('New York');

    expect(itinerary).toHaveProperty('ports');
})

});