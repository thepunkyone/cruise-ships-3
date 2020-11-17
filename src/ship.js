function Ship(currentPort) {

    this.currentPort = currentPort;
    this.passengers = 0;

    };

    Ship.prototype.startJourney = function () {
     this.currentPort = null;

    };




    module.exports = Ship;