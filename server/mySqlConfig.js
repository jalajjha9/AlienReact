const mySql = require("mysql");
const env = require("./env");
const config = require("./config").get(env);

const pool = mySql.createPool({
    host: config.mysqlDb.host,
    user: config.mysqlDb.user,
    password: config.mysqlDb.password,
    database: config.mysqlDb.database,
    port: config.mysqlDb.port,
    waitForConnections: true,
    connectionLimit: 50,
    multipleStatements: true,
});

pool.on("connection", (connection) => {
    console.log("New mysql thread allocated" + connection.threadId);
});
