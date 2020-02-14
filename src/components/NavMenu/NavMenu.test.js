import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom"
import NavMenu from "./NavMenu";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

it("renders NavMenu", () => {
  const { getAllByText } = render(<Router history={history}><NavMenu /></Router>);
  const navbar = getAllByText(/Home/i);
  expect(navbar[0]).toBeInTheDocument();
});