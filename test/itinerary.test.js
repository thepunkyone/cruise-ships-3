const Itinerary = require("../src/itinerary");

let belfast;
let liverpool;
let itinerary;

describe("Itinerary", () => {
  it("returns an object", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("contains a ports property", () => {
    belfast = jest.fn();
    liverpool = jest.fn();
    itinerary = new Itinerary("belfast");
    expect(itinerary).toHaveProperty("ports");
  });
});
