import React from "react";
import PropTypes from "prop-types";
import "./PropertyCard.css";

function PropertyCard({ title, city, resume, price, description, photo }) {
  return (
    <div className="bloc_card">
      <div className="bloc_card_body">
        <div className="bloc_card_pic">
          <img src={photo} alt="pic_property" />
        </div>
        <div className="bloc_card_resume">
          <p id="title_property">{title}</p>
          <br />
          <p id="resume">{resume}</p>
          <br />
          <p id="city">{city}</p>
          <br />
          <p id="price">{price}</p>
        </div>
        <div className="description_card">
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default PropertyCard;
