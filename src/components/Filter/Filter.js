import React from "react";
// import * as SC from "./Filter.style";

const Filter = () => {
  return (
    <form>
      <label id="collection">Collection</label>
      <input type="text" id="collection"></input>
      <label id="artist">Artist / Creator</label>
      <input type="text" id="artist"></input>
    </form>
  );
};

export default Filter;
