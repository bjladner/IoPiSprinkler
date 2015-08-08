var GPIO = require('onoff').Gpio;
var logger = require("./logger");

const idleState = 0;
const runningState = 1;

module.exports = sprinklerController;

function sprinklerController(data) {
    this.deviceID = data.deviceID;
    this.name = data.name;
    this.type = data.type;
    this.Status = "Idle"; // 'Running' or 'Idle'
    this.lastStateChange = new Date().getTime();
}

sprinklerController.prototype.changeStatus = function() {
    var self = this;
    logger.info("Changing state of " + this.name);
}

sprinklerController.prototype.getStatus = function(callback) {
    var self = this;
    logger.debug("Getting state of door " + this.name);
    logger.debug("State of " + self.name + " is " + self.Status);
    callback();
}
