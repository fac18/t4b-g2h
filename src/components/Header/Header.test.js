import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

it("renders the page header", () => {
  const { getByText } = render(<Header />);
  const pageTitle = getByText(/Gateway2Heritage/i);
  expect(pageTitle).toBeInTheDocument();
});

// it("renders the search bar", () => {
//   const { getByText } = render(<Header />);
//   expect.stringContaining("Search");
// });
