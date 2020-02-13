import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

it("renders the page footer", () => {
  const { getByText } = render(<BrowserRouter><Footer /></BrowserRouter>);
  const privacyLink = getByText(/Privacy Policy/i);
  expect(privacyLink).toBeInTheDocument();
});