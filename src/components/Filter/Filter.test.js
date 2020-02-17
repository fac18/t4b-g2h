import React from "react";
import { render } from "@testing-library/react";
import Filter from "./Filter";

it("renders the Filter page", () => {
  const { getByText } = render(<Filter />);
  const titleText = getByText(/collection/i);
  expect(titleText).toBeInTheDocument();
});
