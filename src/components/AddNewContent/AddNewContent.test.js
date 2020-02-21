import React from "react";
import { render } from "@testing-library/react";
import AddNewContent from "./AddNewContent";
import { BrowserRouter } from "react-router-dom";

it("renders the AddNewContent page", () => {
  const { getByText } = render(
    <BrowserRouter>
      <AddNewContent />
    </BrowserRouter>
  );
  const creator = getByText(/creator/i);
  expect(creator).toBeInTheDocument();
});
