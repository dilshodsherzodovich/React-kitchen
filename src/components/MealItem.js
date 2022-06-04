import React from "react";
import { Link } from "react-router-dom";
function MealItem({ idMeal, strMeal, strMealThumb }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
        <span className="card-title title-text m-0">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link className="btn" to={`/meals/${idMeal}`}>
          See recipe
        </Link>
      </div>
    </div>
  );
}

export default MealItem;
