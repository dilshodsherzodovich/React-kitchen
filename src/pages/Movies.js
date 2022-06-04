import React from "react";
import {
  useParams,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

function Movies(props) {
  const { id } = useParams();
  const { goBack, goForward } = useHistory();
  const value = useLocation();
  const value2 = useRouteMatch();
  console.log(value2);

  return (
    <div>
      <h1>{id}-movie</h1>
      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Movies;
