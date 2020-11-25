const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("with ports and an itinerary", () => {
  let ship;
  let belfast;
  let liverpool;
  let itinerary;

  beforeEach(() => {
    belfast = new Port("Belfast");
    liverpool = new Port("Liverpool");
    itinerary = new Itinerary([belfast, liverpool]);
    ship = new Ship(itinerary);
  });

  describe("Ship", () => {
    it("returns an object", () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it("can have ports", () => {
      expect(itinerary.ports).toEqual([belfast, liverpool]);
    });

    it("cant sail further than its itinerary", () => {
      ship.sail();
      ship.dock();

      expect(() => ship.sail()).toThrowError("End of itinerary reached");
    });

    it("gets added to port on instantiation", () => {
      expect(belfast.ships).toContain(ship);
    });
  });

  describe("sail", () => {
    it("can set sail", () => {
      ship.sail();

      expect(ship.currentPort).toBeFalsy();
      expect(belfast.ships).not.toContain(ship);
    });
  });

  describe("dock", () => {
    it("can dock at a different port", () => {
      ship.sail();
      ship.dock();

      expect(ship.currentPort).toBe(liverpool);
      expect(liverpool.ships).toContain(ship);
    });
  });
});
