const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM buyers")
    .then(([buyers]) => buyers);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM buyers where id = ?", [id])
    .then(([buyer]) => buyer);
};

const createBuyer = (buyer) => {
  return db
    .promise()
    .query("INSERT INTO buyers SET ?", [buyer])
    .then(([response]) => response);
};

module.exports = { findAll, findOne, createBuyer };
