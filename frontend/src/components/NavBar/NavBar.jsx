import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_key.png";
import phone from "../../assets/img/phone.png";
import "./NavBar.css";

function NavBar() {
  const [showProperties, setShowProperties] = useState(false);
  const [showAgencies, setShowAgencies] = useState(false);

  return (
    <div className="header_main">
      <div className="logo_body">
        <Link to="/Main">
          <img className="logo_key" src={logo} alt="logo" />
        </Link>
        <h1>La Clé de chez vous</h1>
      </div>
      <div className="header_menu_link">
        <div>
          <button
            type="button"
            onClick={() => setShowProperties(!showProperties)}
          >
            Nos biens
          </button>
          {showProperties && (
            <ul>
              <li>
                <Link to="/buy">Acheter</Link>
              </li>
              <li>
                <Link to="/favorites">Mes favoris</Link>
              </li>
            </ul>
          )}
        </div>
        <div>
          <button type="button" onClick={() => setShowAgencies(!showAgencies)}>
            Nos agences
          </button>
          {showAgencies && (
            <ul>
              <li>
                <Link to="/find-agency">Trouver une agence</Link>
              </li>
              <li>
                <Link to="/search">Confiez-nous votre recherche</Link>
              </li>
            </ul>
          )}
        </div>
        <button type="submit" className="button_sell_with_us">
          Vendre avec nous
        </button>
        <Link to="/ConnexionAgent">
          <img className="logo_phone" src={phone} alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
