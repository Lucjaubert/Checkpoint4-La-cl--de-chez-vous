const buyerModel = require("../models/buyerModel");

const buyerController = {
  getAllBuyers: (req, res, next) => {
    buyerModel
      .findAll()
      .then((buyer) => res.status(200).send(buyer))
      .catch((err) => next(err));
  },
  getBuyerById: (req, res, next) => {
    const { id } = req.params;
    buyerModel
      .findOne(id)
      .then(([buyer]) => res.status(200).send(buyer))
      .catch((err) => next(err));
  },

  createBuyerForm: (req, res, next) => {
    const buyer = req.body;
    buyerModel
      .createBuyerForm(buyer)
      .then(() => res.status(200).send("created"))
      .catch((err) => next(err));
  },

  deleteBuyerForm: (req, res, next) => {
    const buyer = req.body;
    buyerModel
      .deleteBuyerForm(buyer)
      .then(() => res.status(200).send("deleted"))
      .catch((err) => next(err));
  },

  updateBuyerForm: (req, res, next) => {
    const buyer = req.body;
    buyerModel
      .updateBuyerForm(buyer)
      .then(() => res.status(200).send("updated"))
      .catch((err) => next(err));
  },
};

module.exports = buyerController;
