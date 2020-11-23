function Ship(currentPort) {

    this.currentPort = currentPort;
    this.previousPort = null;
    this.dockingPort = null;

    };

    Ship.prototype.sail = function () {
     this.departingPort = null;
     this.dockingPort = null;

    };

    Ship.prototype.dock = function (dockingPort) {
     this.dockingPort = dockingPort;

    };





    module.exports = Ship;