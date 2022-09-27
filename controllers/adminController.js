import User from "../models/User.js";
const dashboard = (req, res) => {
  res.render("index");
};

const userListing = (req, res) => {
  res.render("users");
};

const addUserView = (req, res) => {
  res.render("addUser");
};

const insertUser = (req, res) => {
  res.send(req.body);
};

export { dashboard, userListing, addUserView, insertUser };
