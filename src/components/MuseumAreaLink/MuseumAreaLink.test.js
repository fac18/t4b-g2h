import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom"
import MuseumAreaLink from "./MuseumAreaLink";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

it("renders Museum Area items", () => {
  const { getByTestId } = render(<Router history={history}><MuseumAreaLink /></Router>);
  const museumLink = getByTestId("museum");
  expect(museumLink).toBeInTheDocument();
});