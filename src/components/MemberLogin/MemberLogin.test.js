import React from "react";
import { render } from "@testing-library/react";
import MemberLogin from "./MemberLogin";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const history = createMemoryHistory();

it("renders the MemberLogin page", () => {
  const { getByText } = render(
    <Router history={history}>
      <MemberLogin />
    </Router>
  );
  const pageTitle = getByText(/User Login/i);
  expect(pageTitle).toBeInTheDocument();
});
