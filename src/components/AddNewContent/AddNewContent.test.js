import React from "react";
import { render } from "@testing-library/react";
import AddNewContent from "./AddNewContent";

it("renders the AddNewContent page", () => {
  const { getByText } = render(<AddNewContent />);
  const submitButton = getByText(/Submit/i);
  expect(submitButton).toBeInTheDocument();
});
