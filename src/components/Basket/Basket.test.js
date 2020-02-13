import React from "react";
import { render } from "@testing-library/react";
import Basket from "./Basket";

it("renders the Basket page", () => {
  const { getByText } = render(<Basket />);
  const titleText = getByText(/My Basket/i);
  expect(titleText).toBeInTheDocument();
});
