/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const mockData = require("./airlines-mockdata");
const { roles, flights, passengers, ancillary } = mockData;
const data = JSON.stringify({ roles, flights, passengers, ancillary });
const filepath = path.join(__dirname, "airlines_db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
