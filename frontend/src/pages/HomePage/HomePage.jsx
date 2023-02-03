import React, { useState, useEffect } from "react";
import { GetAllProperties } from "../../apis/propertyApi";
import NavBar from "../../components/NavBar/NavBar";
import PropertySmallCard from "../../components/PropertySmallCard/PropertySmallCard";
import FilterBoxBudget from "../../components/FilterBoxBudget/FilterBoxBudget";
import "./HomePage.css";

function HomePage() {
  const [showCities, setShowCities] = useState(false);
  const [showBudget, setShowBudget] = useState(false);
  const [budget, setBudget] = useState(0);
  const [propertySmallCard, setPropertySmallCard] = useState([]);

  const propertySmallCards = async () => {
    await GetAllProperties().then((res) => {
      setPropertySmallCard(res.data);
    });
  };

  useEffect(() => {
    propertySmallCards();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="home_page_body">
        <div className="block_filter">
          <div className="home_page_introduction">
            <h3>Votre prochain bien à portée de main.</h3>
          </div>
          <div className="buy_box_filters">
            <div className="buy_box_title">
              <h4>Acheter</h4>
            </div>
            <div className="buy_box_buttons">
              <button type="button" onClick={() => setShowCities(!showCities)}>
                Villes
              </button>
              {showCities && (
                <ul>
                  <li>Bordeaux</li>
                  <li>Biarritz</li>
                </ul>
              )}
              <div>
                <button
                  type="button"
                  onClick={() => setShowBudget(!showBudget)}
                >
                  Budget
                </button>
                {showBudget && (
                  <FilterBoxBudget budget={budget} setBudget={setBudget} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="property_smallcards_container">
          {propertySmallCard.map((property) => (
            <PropertySmallCard
              title={property.title_property}
              city={property.city}
              resume={property.resume}
              price={property.selling_price_including_VAT}
              photo={property.photo_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
