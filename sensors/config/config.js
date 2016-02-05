var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'myproject'
    },
    data:{
      pathTow1_slave: rootPath + '/app/data/',
      w1_slaveFilename: 'temperatur.txt'
    },
    device:{
      serial: ''
    },
    port: 3000,
  },

  test: {
    root: rootPath,
    app: {
      name: 'myproject'
    },
    port: 3000,
  },

  production: {
    root: rootPath,
    app: {
      name: 'myproject'
    },
    data:{
      pathTow1_slave: rootPath + '/sys/bus/w1/devices',
      w1_slaveFilename: 'w1_slave'
    },
    device:{
      serial: '00000000'
    },
    port: 3000,
  }
};

module.exports = config[env];
