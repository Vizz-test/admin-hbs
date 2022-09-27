import express from "express";
import {
  addUserView,
  dashboard,
  userListing,
  insertUser,
} from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.get("/", dashboard);
adminRouter.get("/users", userListing);
adminRouter.get("/addUser", addUserView);
adminRouter.post("/addUser", insertUser);
export default adminRouter;
