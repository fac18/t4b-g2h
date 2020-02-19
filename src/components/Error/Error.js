import React from "react";
import * as SC from "./Error.style";

const Error = () => {
  return (
    <SC.ErrorBox>
      <h1 data-testid="heading">404: Page not found</h1>
    </SC.ErrorBox>
  );
};

export default Error;
