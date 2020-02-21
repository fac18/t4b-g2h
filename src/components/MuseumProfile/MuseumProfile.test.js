import React from "react";
import { render } from "@testing-library/react";
import MuseumProfile from "./MuseumProfile";
import { BrowserRouter } from "react-router-dom";

it("contains an add new service button", () => {
  const { getByText } = render(
    <BrowserRouter>
      <MuseumProfile />
    </BrowserRouter>
  );
  const addTextButton = getByText(/Add new content/i);
  expect(addTextButton).toBeInTheDocument();
});
