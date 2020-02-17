import React from "react";
import PropTypes from "prop-types";
//import * as SC from "./PreviewPage.style";

const PreviewPage = (searchResult) => {
    if (!searchResult) return <h1>Loading Preview</h1>;
    return (
    

       <h1>Data exists!</h1>
    );
};

PreviewPage.propTypes = {
    searchResult: PropTypes.array
  };

export default PreviewPage;