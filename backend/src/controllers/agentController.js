/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const agentModel = require("../models/agentModel");

const agentController = {
  getAllAgents: (req, res, next) => {
    agentModel
      .findAll()
      .then(([agents]) => res.status(200).send(agents))
      .catch((err) => next(err));
  },
  getAgentById: (req, res, next) => {
    const { id } = req.params;
    agentModel
      .findOne(id)
      .then(([agent]) => res.status(200).send(agent))
      .catch((err) => next(err));
  },
  createAgent: async (req, res, next) => {
    const { firstname, lastname, phone, email, password } = req.body;
    const hashedPassword = await argon2.hash(password);
    agentModel
      .create({
        firstname,
        lastname,
        phone,
        email,
        password: hashedPassword,
      })
      .then(([agent]) =>
        res.status(201).send({
          message: "nouvelle agent créé",
          id: agent.insertId,
          firstname,
          lastname,
          phone,
          email,
          hashedPassword,
        })
      )
      .catch((err) => next(err));
  },

  login: (req, res, next) => {
    const { email, password } = req.body;
    agentModel
      .findByEmail(email)
      .then(async ([agent]) => {
        if (!agent) {
          return res.status(401).send({ message: "Invalid email or password" });
        }
        const {
          real_estate_agent_id,
          firstname,
          lastname,
          phone,
          email: userEmail,
          password: hashedPassword,
        } = agent;
        if (await argon2.verify(hashedPassword, password)) {
          const token = jwt.sign(
            {
              real_estate_agent_id,
              firstname,
              lastname,
              phone,
              email: userEmail,
            },
            process.env.JWT_AUTH_SECRET,
            { expiresIn: "1h" }
          );
          res
            .cookie("access_token", token, { httpOnly: true, secure: true })
            .status(200)
            .send({
              message: "Login successful",
              real_estate_agent_id,
              firstname,
              lastname,
              phone,
              email,
            });
        } else {
          res.status(401).send({ message: "Invalid email or password" });
        }
      })

      .catch((err) => next(err));
  },
  deleteAgent: (req, res, next) => {
    const { id } = req.params;
    agentModel
      .deleteOne(id)
      .then(([agent]) => res.status(200).send(agent))
      .catch((err) => next(err));
  },
};

module.exports = agentController;
