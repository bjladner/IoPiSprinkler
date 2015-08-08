var sock = require('socket.io-client');
var cfg = require('./config.default');
var sprinklerController = require('./sprinklerController');
var sprinklerData = require('./sprinklerData');
var logger = require("./logger");

var io = sock.connect(cfg.server.address + ":" + cfg.server.port);

var clientInfo = new sprinklerData();

var sprinklerSystem = new sprinklerController(cfg.sprinklerSystem);

function clientUpdate() {
    clientInfo.updateData(function() {
	for (var data in clientInfo) {
	    if (data != "updateData" && data != "nodeID" && data != "timer")
		logger.debug("clientInfo: " + data + " - " + clientInfo[data]);
	}
	clientInfo.nodeID = sprinklerSyster.deviceID;
        logger.debug("Sending client info for " + sprinklerSyster.name);
        io.emit('CLIENT_INFO', clientInfo);
    });
    clientInfo.timer = setTimeout(function() {
	clientUpdate();
    }, cfg.sensor.interval);
}

io.on('connect', function(socket){
    logger.info("Connected to RPi2: " + cfg.server.address + ":" + cfg.server.port);
  
    sprinklerSystem.getStatus(function () {
        logger.info("Sending data for: " + sprinklerSystem.name);
        io.emit('SEND_DATA', sprinklerSystem);
    });
    
    clientUpdate();
});

io.on('ACTION', function(data){
    logger.debug("Data received: " + JSON.stringify(data));
    if (data.action == "CHANGE") {
        sprinklerSystem.changeStatus();
    } else if (data.action == "STATUS") {
        sprinklerSystem.getStatus(function () {
            io.emit('SEND_DATA', sprinklerSystem);
        });  
    } else {
        logger.warn("Unknown command: " + data.action);
    }
});