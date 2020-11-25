const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("with ports and an itinerary", () => {
  let ship;
  let belfast;
  let liverpool;
  let itinerary;
  let port;

  beforeEach(() => {
    port = {
      removeShip: jest.fn(),
      addShip: jest.fn(),
    };

    belfast = {
      ...port,
      name: "Belfast",
      ships: [],
    };

    liverpool = {
      ...port,
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
      expect(port.addShip).toHaveBeenCalledWith(ship);
    });

    it("has a starting port", () => {
      expect(ship.currentPort).toBe(belfast);
    });
  });

  describe("sail", () => {
    it("can set sail", () => {
      ship.sail();

      expect(ship.currentPort).toBeFalsy();
      expect(liverpool.removeShip).toHaveBeenCalledWith(ship);
    });
  });

  describe("dock", () => {
    it("can dock at a different port", () => {
      ship.sail();
      ship.dock();

      expect(ship.currentPort).toBe(liverpool);
      expect(liverpool.addShip).toHaveBeenCalledWith(ship);
    });
  });
});
