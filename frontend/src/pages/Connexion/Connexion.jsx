import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { authContext } from "../../context/AuthContext";
import "./Connexion.css";

function Connexion({ user }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useContext(authContext);
  const { login, auth } = useContext(authContext);

  useEffect(() => {
    if (auth.data) {
      navigate("/Main");
    }
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    if (user !== "agent") {
      setError(
        "Cette connexion est uniquement réservée aux agents immobiliers"
      );
    } else {
      axios
        .post(
          `${apiUrl}${user}/login`,
          {
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 200) {
            // eslint-disable-next-line no-undef
            login(res.data);
          }
        })
        .catch((err) => setError(err.response.data.message));
    }
    event.preventDefault();
  };

  return (
    <div>
      <div className="title">
        <h2>Connecte toi</h2>
        <h2>
          à ton espace
          {user === "agent" ? "agent" : ""}{" "}
        </h2>
      </div>
      <form
        name="connexion"
        method="post"
        className="connexion-form"
        onSubmit={handleSubmit}
      >
        <div className="connexion-input">
          <label htmlFor="Email">Adresse email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="test@blabla.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="connexion-input">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="connexion-button">
          <p className="error-message">{error}</p>
          <button className="uppercase" type="submit">
            Je me connecte
          </button>
        </div>
        <div className="small_link">
          <h4>
            <Link to="/ForgottenPassword">Mot de passe oublié ?</Link>
          </h4>
        </div>
      </form>
    </div>
  );
}

Connexion.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Connexion;
