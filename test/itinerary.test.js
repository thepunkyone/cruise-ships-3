const Itinerary = require("../src/itinerary");

describe("Itinerary", () => {
  const belfast = jest.fn();
  const liverpool = jest.fn();
  let itinerary;

  beforeEach(() => {
    itinerary = new Itinerary([belfast, liverpool]) // use beforeEach to create an itinerary for every test in one place
  })

  it("returns an object", () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  it("contains a ports property", () => {
    expect(itinerary).toHaveProperty("ports");
  });

  it("has ports", () => { // check that the Itinerary contains the ports that it was created with
    expect(itinerary.ports).toEqual([belfast, liverpool]);
  });
});
