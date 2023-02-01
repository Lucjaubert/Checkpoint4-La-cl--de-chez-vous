const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM properties")
    .then(([properties]) => properties);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM properties where id = ?", [id])
    .then(([property]) => property);
};

const createProperty = (property) => {
  return db
    .promise()
    .query("INSERT INTO property SET ?", [property])
    .then(([reponse]) => reponse);
};

module.exports = { findAll, findOne, createProperty };
