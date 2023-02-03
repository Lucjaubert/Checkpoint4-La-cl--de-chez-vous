import React from "react";
import PropTypes from "prop-types";
import "./PropertySmallCard.css";

function PropertySmallCard({ title, city, resume, price, photo }) {
  return (
    <div className="bloc_card_body">
      <div className="bloc_card_details">
        <img src={photo} className="pic_property" alt="pic" />

        <div className="bloc_card_resume">
          <p id="city">{city}</p>
          <br />
          <p id="title_property">{title}</p>
          <br />
          <p id="resume">{resume}</p>
          <br />
          <p id="price">{price}</p>
        </div>
      </div>
    </div>
  );
}

PropertySmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default PropertySmallCard;
