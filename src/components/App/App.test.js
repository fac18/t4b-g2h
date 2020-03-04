import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  act
} from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

afterEach(cleanup);

it("renders App top level", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Gateway2Heritage/i);
  expect(titleElement).toBeInTheDocument();
});

it("renders routes/navigation", () => {
  const history = createMemoryHistory();
  const { container, getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(container.innerHTML).toMatch("Gallery name");
  act(() => {
    fireEvent.click(getByText(/About Us/i));
  });
  expect(container.innerHTML).toMatch("The Gateway brings together");

  fireEvent.click(getByText(/Terms and Conditions/i));

  expect(container.innerHTML).toMatch("Terms and Conditions");

  fireEvent.click(getByText(/Privacy Policy/i));

  expect(container.innerHTML).toMatch("Privacy Policy");
});

// it("routes to 404 page with bad endpoint", () => {
//   const history = createMemoryHistory();

//   history.push("/badroute");
//   const { getByTestId } = render (
//     <Router history={history}>
//       <App />
//     </Router>
//   )

//   expect(getByTestId("heading")).toHaveTextContent("404: Page not found")
// })
