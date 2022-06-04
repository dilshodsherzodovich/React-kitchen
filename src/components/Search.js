import React, { useState } from "react";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          value={value}
          type="search"
          className="form-control"
          placeholder="search by category"
        />
        <button
          onClick={handleSubmit}
          className="btn btn-outline-secondary"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
