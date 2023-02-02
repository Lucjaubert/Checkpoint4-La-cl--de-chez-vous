import React from "react";
import PropTypes from "prop-types";
import "./FilterBoxBudget.css";

function FilterBoxBudget({ budget, setBudget }) {
  return (
    <div className="filter_budget">
      <label htmlFor="budget"> </label>
      <input
        type="range"
        min="0"
        max="6000000"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />{" "}
      <h4>
        {" "}
        <span className="minimal_budget">min.</span>
        <span className="amount_budget">{budget} € </span>
        <span className="maximal_budget">max.</span>
      </h4>
    </div>
  );
}

export default FilterBoxBudget;

FilterBoxBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  setBudget: PropTypes.func.isRequired,
};
