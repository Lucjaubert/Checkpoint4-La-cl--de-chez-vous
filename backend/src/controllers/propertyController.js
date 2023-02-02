const propertyModel = require("../models/propertyModel");

const propertyController = {
  getAllProperties: (req, res, next) => {
    propertyModel
      .findAll()
      .then((property) => res.status(200).send(property))
      .catch((err) => next(err));
  },
  getPropertyById: (req, res, next) => {
    const { id } = req.params;
    propertyModel
      .findOne(id)
      .then(([property]) => res.status(200).send(property))
      .catch((err) => next(err));
  },

  getPropertyByPrice: (req, res, next) => {
    const { price } = req.params;
    propertyModel
      .findByPrice(price)
      .then((property) => res.status(200).send(property))
      .catch((err) => next(err));
  },

  createPropertyForm: (req, res, next) => {
    const property = req.body;
    propertyModel
      .createPropertyForm(property)
      .then(() => res.status(200).send("created"))
      .catch((err) => next(err));
  },

  deletePropertyForm: (req, res, next) => {
    const property = req.body;
    propertyModel
      .deletePropertyForm(property)
      .then(() => res.status(200).send("deleted"))
      .catch((err) => next(err));
  },

  updatePropertyForm: (req, res, next) => {
    const property = req.body;
    propertyModel
      .updatePropertyForm(property)
      .then(() => res.status(200).send("updated"))
      .catch((err) => next(err));
  },
};

module.exports = propertyController;
