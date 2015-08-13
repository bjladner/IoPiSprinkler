var cfg = {};

// Server Information
cfg.server = {};
cfg.server.address = 'http://192.168.1.76';
//cfg.server.port = 8080;
cfg.server.port = 8888;

// Client Information
cfg.client = {};
cfg.client.address = 'http://192.168.1.140';
cfg.client.updateInterval = 10000;

// DHT22 Sensor settings
cfg.sensor = {};
cfg.sensor.use = false;
cfg.sensor.type = 22; //DHT22
cfg.sensor.gpio = 7; //GPIO7

// Sprinkler System settings
cfg.sprinklerSystem = {};
cfg.sprinklerSystem.deviceID = 20;
cfg.sprinklerSystem.name = "Sprinkler System";
cfg.sprinklerSystem.type = "sprinkler";

module.exports = cfg;
