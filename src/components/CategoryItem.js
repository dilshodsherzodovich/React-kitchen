import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({
  strCategory,
  strCategoryDescription,
  strCategoryThumb,
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
        <span className="card-title title-text">{strCategory}</span>
      </div>
      <div className="card-content">
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link className="btn" to={`category/${strCategory}`}>
          See meals
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
