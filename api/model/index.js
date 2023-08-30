const Users = require("./Users");
const Vehicles = require("./Vehicles");
const Orders = require("./Orders");
// Export all objects
module.exports = {
  users: new Users(),
  vehicles: new Vehicles(),
  orders: new Orders(),
};
