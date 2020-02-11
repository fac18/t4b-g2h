import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

it("renders the page footer", () => {
  const { getByText } = render(<Footer />);
  const privacyLink = getByText(/Privacy Policy/i);
  expect(privacyLink).toBeInTheDocument();
});