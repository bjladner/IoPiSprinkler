var cfg = {};

// Server Information
cfg.server = {};
cfg.server.address = 'http://192.168.1.76';
//cfg.server.port = 8080;
cfg.server.port = 8888;

// Client Information
cfg.client = {};
cfg.client.address = 'http://192.168.1.140';

// Sprinkler System settings
cfg.sprinklerSystem = {};
cfg.sprinklerSystem.interval = 10000;
cfg.sprinklerSystem.deviceID = 20;
cfg.sprinklerSystem.name = "Sprinkler System";
cfg.sprinklerSystem.type = "sprinkler";

module.exports = cfg;
