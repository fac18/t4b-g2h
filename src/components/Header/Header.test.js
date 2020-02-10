import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

it("renders the page header", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Gateway2Heritage/i);
  expect(linkElement).toBeInTheDocument();
});