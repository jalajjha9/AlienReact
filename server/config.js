const env = require("./env");
const config = {
  dev: {
    allowUrl: "*",
    port: "5001",
    mysqlDb: {
      host: "127.0.0.1",
      user: "root",
      password: "root@1234",
      database: "alien_react",
      port: "3306",
    },
    mongoDb: {},
  },
  prod: {
    allowUrl: "*",
    port: "5001",
    mysqlDb: {
      host: "127.0.0.1",
      user: "produser",
      password: "prodpassword",
      database: "alien_react",
      port: "3306",
    },
    mongoDb: {},
  },
};

const getEnvironmentObj = (env) => {
  environment = env;
  return config[environment.trim()] || config.dev;
};

exports.get = getEnvironmentObj;
