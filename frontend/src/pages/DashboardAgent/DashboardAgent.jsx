import React, { useState, useEffect } from "react";
import { GetAllProperties } from "../../apis/propertyApi";
import NavBar from "../../components/NavBar/NavBar";
import PropertySmallCard from "../../components/PropertySmallCard/PropertySmallCard";
import FilterBoxBudget from "../../components/FilterBoxBudget/FilterBoxBudget";
import CreateCard from "../../components/CreateCard/CreateCard";
import "./DashboardAgent.css";

function DashboardAgent() {
  const [showCities, setShowCities] = useState(false);
  const [showBudget, setShowBudget] = useState(false);
  const [budget, setBudget] = useState(0);
  const [propertySmallCard, setPropertySmallCard] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const propertySmallCards = async () => {
    await GetAllProperties().then((res) => {
      setPropertySmallCard(res.data);
    });
  };

  useEffect(() => {
    propertySmallCards();
  }, []);

  const handleAddProperty = (property) => {
    CreateCard(property).then((res) => {
      // eslint-disable-next-line no-restricted-syntax
      console.log(res.data);
    });
  };

  return (
    <div>
      <NavBar />
      <div className="home_page_body">
        <div className="block_filter">
          <div className="home_page_introduction">
            <h3>Votre prochain bien à portée de main.</h3>
          </div>
          <div className="add_card">
            <div>
              {showAddForm && (
                <CreateCard handleAddProperty={handleAddProperty} />
              )}
              <button
                type="button"
                className="btn_container"
                onClick={() => setShowAddForm(!showAddForm)}
              >
                Ajouter une annonce
              </button>
            </div>
            <button type="submit" className="btn_container">
              Actualiser
            </button>
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
          {propertySmallCard.map((properties) => (
            <PropertySmallCard
              key={properties.id}
              title={properties.title_property}
              city={properties.city}
              resume={properties.resume}
              price={properties.selling_price_including_VAT}
              photo={properties.photo_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardAgent;
