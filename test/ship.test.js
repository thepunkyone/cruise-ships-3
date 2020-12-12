const Ship = require("../src/ship");

describe("with ports and an itinerary", () => {
  let ship;
  let belfast;
  let liverpool;
  let itinerary;

  beforeEach(() => {
    belfast = {
      removeShip: jest.fn(), // the removeShip and addShip methods here can't be shared between the ports because
      addShip: jest.fn(), // when you assert that liverpool.addShip() was called it will give you a false positive
      name: "Belfast", // because belfast.addShip() was called when the ship got instantiated
      ships: [],
    };

    liverpool = {
      removeShip: jest.fn(),
      addShip: jest.fn(),
      name: "Liverpool",
      ships: [],
    };

    itinerary = {
      ports: [belfast, liverpool],
    };

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
      expect(belfast.addShip).toHaveBeenCalledWith(ship);
    });

    it("has a starting port", () => {
      expect(ship.currentPort).toBe(belfast);
    });
  });

  describe("sail", () => {
    it("can set sail", () => {
      ship.sail();

      expect(ship.currentPort).toBeFalsy();
      expect(belfast.removeShip).toHaveBeenCalledWith(ship); // ship sets sail from the first port in the ports array, so this is belfast
    });                                                      // liverpool was only passing because the removeShip function was shared
  });                                                         // between the two

  describe("dock", () => {
    it("can dock at a different port", () => {
      ship.sail();
      ship.dock();

      expect(ship.currentPort).toBe(liverpool);
      expect(liverpool.addShip).toHaveBeenCalledWith(ship);
    });
  });
});
