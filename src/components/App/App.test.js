import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders App top level", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Gateway2Heritage/i);
  expect(titleElement).toBeInTheDocument();
});
