function Ship(departingPort) {

    this.departingPort = departingPort;
    this.dockingPort = null;
    this.passengers = 0;

    };

    Ship.prototype.sail = function () {
     this.departingPort = null;
     this.dockingPort = null;

    };

    Ship.prototype.dock = function (dockingPort) {
     this.dockingPort = dockingPort;

    };





    module.exports = Ship;