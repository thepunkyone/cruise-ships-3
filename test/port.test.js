const Port = require("../src/port");

describe("something", () => {
  let port;
  let ship;

  beforeEach(() => {
    port = new Port("Belfast");
  });

  describe("Port", () => {
    it("returns an object", () => {
      expect(port).toBeInstanceOf(Object); // can reuse the port set up in beforeEach
    });

    it("has the correct name", () => { // asserting on the name value here, so the test title should match
      expect(port.name).toEqual("Belfast");
    });
  });

  describe("addShip", () => {
    it("can add a ship", () => {
      ship = jest.fn;
      port.addShip(ship);
      expect(port.ships).toContain(ship);
    });
  });

  describe("removeShip", () => {
    it("can remove a ship", () => {
      ship = jest.fn;
      port.removeShip(ship);
      expect(port.ships).toEqual([]);
    });
  });
});
