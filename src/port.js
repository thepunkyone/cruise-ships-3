
    function Port (name) {
        this.name = name;
        this.ships = [];
    
    };

    Port.prototype.addShip = function (ship) {
        // this.ships = [ship]; // In this case the whole ships array gets replaced but what if the port contains 2 ships already?
        this.ships.push(ship) // The solution is to add the ship using Array.prototype.push()
    };

    Port.prototype.removeShip = function (ship) {
        // this.ships.pop(); // Array.prototype.pop() removes the last ship in the ships array but what if the ship setting sail
                            // is not the last ship that docked at the port?
        const indexOfShip = this.ships.indexOf(ship) // Use index of ship and Array.prototype.splice() to remove the correct ship, not just any last ship in the array
        this.ships.splice(indexOfShip, 1)
    }

    module.exports = Port;