import React from "react";
import { render } from "@testing-library/react";
import MemberLogin from "./MemberLogin";

it("renders the MemberLogin page", () => {
  const { getByText } = render(<MemberLogin />);
  const pageTitle = getByText(/Member/i);
  expect(pageTitle).toBeInTheDocument();
});
