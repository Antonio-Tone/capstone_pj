const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
// Import all model's objects
const { users, orders, vehicles } = require("../model");


// ============ User's router ==============

routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
routes.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});
routes.post("/register", bodyParser.json(), (req, res) => {
  users.register(req, res);
});
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});
routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});

// ============ vehicles router ==============

routes.post("/Vehicle", bodyParser.json(), (req, res) => {
  vehicles.addVehicle(req, res);
});
      //  get all vehicles 
routes.get("/Vehicles", (req, res) => {
  vehicles.fetchVehicles(req, res);
});
    //  get single vehicle and therefore require an id
routes.get("/Vehicle/:id", (req, res) => {
  vehicles.fetchVehicle(req, res);
});
routes.patch("/Vehicle/:id", bodyParser.json(), (req, res) => {
  vehicles.updateVehicle(req, res);
});
routes.delete("/Vehicle/:id", (req, res) => {
  
  vehicles.deleteVehicle(req, res);
});

// ============ Order router ==============

routes.post("/Order", bodyParser.json(), (req, res) => {
  orders.addOrder(req, res);
});
      //  get all orders
routes.get("/Orders", (req, res) => {
  orders.fetchOrders(req, res);
});
    //  get single order and therefore require an id
routes.get("/Order/:id", (req, res) => {
  orders.fetchOrder(req, res);
});
routes.patch("/Order/:id", bodyParser.json(), (req, res) => {
  orders.updateOrder(req, res);
});
routes.delete("/Order/:id", (req, res) => {
  
  orders.deleteOrder(req, res);
});



module.exports = {
  express,
  routes,
};
