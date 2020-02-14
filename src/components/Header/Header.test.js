import React from "react";

import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  findByTestId
} from "@testing-library/react";
import Header from "./Header";
import App from "../App/App";
import Search from "../Search/Search";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

afterEach(cleanup);

const history = createMemoryHistory();
it("renders the page header", () => {
  const { getByText } = render(
    <Router history={history}>
      <Header />
    </Router>
  );
  const pageTitle = getByText(/Gateway2Heritage/i);
  expect(pageTitle).toBeInTheDocument();
});

const mockResponse = "Collection name";
global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResponse)
  }).catch(console.error)
);

it("mocks a returns of expected data", () => {
  const { getByPlaceholderText, getByText, getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  render(
    <Router history={history}>
      <Search />
    </Router>
  );

  const input = getByPlaceholderText("Search");
  fireEvent.change(input, { target: { value: "Collection name" } });

  const searchButton = getByText("SEARCH");
  fireEvent.click(searchButton);

  expect(global.fetch).toHaveBeenCalledTimes(2);

  // return waitForElement(() => findByTestId("first")).then(para =>
  //   expect(para.innerHTML).toEqual(mockResponse)
  // );
});
