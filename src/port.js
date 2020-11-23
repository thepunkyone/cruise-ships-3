
    function Port (name) {
        this.name = name;
        this.ships = [];
    
    };

    Port.prototype.addShip = function (ship) {
        this.ships = [ship];
    };

    Port.prototype.removeShip = function (ship) {
        this.ships.pop(); 
    }

    module.exports = Port;