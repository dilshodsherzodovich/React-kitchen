import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilterCategory } from "../Api";
import Loader from "../components/Loader";
import MealItem from "../components/MealItem";

function Meals() {
  const [meals, setMeals] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getFilterCategory(id).then((data) => setMeals(data.meals));
  }, [id]);

  return (
    <div>
      {!meals.length ? (
        <Loader />
      ) : (
        <div className="categories">
          {meals.map((el) => (
            <MealItem key={el.idMeal} {...el} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Meals;
