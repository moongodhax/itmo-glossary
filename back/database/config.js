const process = require('process');

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: "mysql",
};

console.log(config);

module.exports = {
  development: config,
  test: config,
  production: config,
}
