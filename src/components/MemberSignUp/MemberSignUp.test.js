import React from "react";
import { render } from "@testing-library/react";
import MemberSignUp from "./MemberSignUp";

it("renders the MemberSignUp page", () => {
  const { getByText } = render(<MemberSignUp />);
  const submitButton = getByText(/Submit/i);
  expect(submitButton).toBeInTheDocument();
});
