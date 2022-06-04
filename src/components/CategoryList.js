import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <div className="categories">
      {catalog.length ? (
        catalog.map((el) => <CategoryItem key={el.idCategory} {...el} />)
      ) : (
        <h3>Nothing is found, please retry</h3>
      )}
    </div>
  );
}

export default CategoryList;
