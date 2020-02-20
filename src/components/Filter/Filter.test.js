import React from "react";
// import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Filter from "./Filter";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const history = createMemoryHistory();

it("renders the Filter page", () => {
  renderer.create(
    <Router history={history}>
      <Filter />
    </Router>
  );
  const titleText = /collection/i;
  expect(titleText).toMatchSnapshot();
});
