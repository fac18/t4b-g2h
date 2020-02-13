import React from "react";
import { render } from "@testing-library/react";
import MemberProfile from "./MemberProfile";

it("renders the MemberProfile page", () => {
  const { getByText } = render(<MemberProfile />);
  const pageTitle = getByText(/Your profile/i);
  expect(pageTitle).toBeInTheDocument();
});
