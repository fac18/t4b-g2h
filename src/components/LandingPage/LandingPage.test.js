import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "./LandingPage";

it("renders image title", () => {
  const { getAllByText } = render(<LandingPage />);
  const imgText = getAllByText(/Gallery name/i);
  expect(imgText[0]).toBeInTheDocument();
});
