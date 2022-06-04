import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../Api";
import Loader from "../components/Loader";

function Recipe() {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    getMealById(id).then((data) => setMeal(data.meals[0]));
  }, []);

  return !meal.idMeal ? (
    <Loader />
  ) : (
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid" />
        <h6>
          <b>
            <span className="firstLetter">You can see how to cook it: </span>
            {meal.strYoutube}
          </b>
        </h6>
      </div>
      <div className="col-md-6 col-sm-12">
        <h6>
          <b>
            <span className="firstLetter">Name</span>: {meal.strMeal}
          </b>
        </h6>
        <h6>
          <b>
            <span className="firstLetter">Area</span>: {meal.strArea}
          </b>
        </h6>
        <h6>
          <b>
            <span className="firstLetter">Category</span>: {meal.strCategory}
          </b>
        </h6>
        <h6>
          <b>
            <span className="firstLetter">Recipe</span>: {meal.strInstructions}
          </b>
        </h6>
      </div>
      {meal.strYoutube ? (
        <iframe
          src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}
          className="m-auto"
          controls="1"
          width="800"
          title={id}
          height="350"
        />
      ) : null}
    </div>
  );
}

export default Recipe;
