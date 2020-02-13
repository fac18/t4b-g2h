import React from "react";

import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from "@testing-library/react";
import Header from "./Header";
import Search from "../Search/Search";
import App from "../App/App";

afterEach(cleanup);

it("renders the page header", () => {
  const { getByText } = render(<Header />);
  const pageTitle = getByText(/Gateway2Heritage/i);
  expect(pageTitle).toBeInTheDocument();
});

// const mockResponse = "Collection name";
// global.fetch = jest.fn().mockImplementation(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(mockResponse)
//   }).catch(console.error)
// );

// it("mock returns expected data", () => {
//   const { getByPlaceholderText, getByText, getByTestId } = render(<Header />);
//   render(<Search />);
 

//   const input = getByPlaceholderText("Search");
//   fireEvent.change(input, { target: { value: "Collection name" } });

//   const searchButton = getByText("SEARCH");
//   fireEvent.click(searchButton);

//   expect(global.fetch).toHaveBeenCalledTimes(1);

//   return waitForElement(() => getByTestId("first")).then(para =>
//     expect(para.innerHTML).toEqual(mockResponse)
//   );
// });
