/* eslint-disable camelcase */

const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM real_estate_agent")
    .then((agents) => agents);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * real_estate_agent id = ?", [id])
    .then(([agent]) => agent);
};

const create = (payload) => {
  return db
    .promise()
    .query("INSERT INTO real_estate_agent SET ?", [payload])
    .then((agent) => agent);
};

const deleteOne = (id) => {
  return db
    .promise()
    .query("DELETE from real_estate_agent WHERE id = ?", [id])
    .then((res) => res);
};

module.exports = { findAll, findOne, create, deleteOne };
