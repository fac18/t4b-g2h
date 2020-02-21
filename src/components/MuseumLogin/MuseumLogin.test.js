import React from "react";
import { render } from "@testing-library/react";
import MuseumLogin from "./MuseumLogin";
import { BrowserRouter } from "react-router-dom";

it("renders the MuseumLogin page", () => {
  const { getByText } = render(
    <BrowserRouter>
      <MuseumLogin />{" "}
    </BrowserRouter>
  );
  const loginText = getByText(/Museum login/i);
  expect(loginText).toBeInTheDocument();
});
