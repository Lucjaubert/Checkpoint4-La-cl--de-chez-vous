const express = require("express");

const buyerRouter = express.Router();

const buyerController = require("../controllers/buyerController");

buyerRouter.get("/", buyerController.getAllBuyers);
buyerRouter.get("/:id", buyerController.getBuyerById);
buyerRouter.post("/createprofile", buyerController.createBuyerForm);
buyerRouter.delete("/:id", buyerController.deleteBuyerForm);
buyerRouter.put("/:id", buyerController.updateBuyerForm);

module.exports = buyerRouter;
