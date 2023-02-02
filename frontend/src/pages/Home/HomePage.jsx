import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import FilterBoxBudget from "../../components/FilterBoxBudget/FilterBoxBudget";
import "./HomePage.css";

function HomePage() {
  const [showCities, setShowCities] = useState(false);
  const [showBudget, setShowBudget] = useState(false);
  const [budget, setBudget] = useState(0);

  return (
    <div>
      <NavBar />
      <div className="home_page_body">
        <div className="home_page_introduction">
          <h3>Votre prochain bien à portée de main.</h3>
        </div>
        <div className="buy_box_filters">
          <div className="buy_box_title">
            <h4>Acheter</h4>
          </div>
          <div>
            <button type="button" onClick={() => setShowCities(!showCities)}>
              Villes
            </button>
            {showCities && (
              <ul>
                <li>Bordeaux</li>
                <li>Biarritz</li>
              </ul>
            )}
          </div>
          <div>
            <button type="button" onClick={() => setShowBudget(!showBudget)}>
              Budget
            </button>
            {showBudget && (
              <FilterBoxBudget budget={budget} setBudget={setBudget} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
