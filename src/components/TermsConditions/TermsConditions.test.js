import React from "react";
import { render } from "@testing-library/react";
import TermsConditions from "./TermsConditions";

it("renders terms and conditions text", () => {
  const { getByText } = render(<TermsConditions />);
  const tcText = getByText(
    /These Conditions together with the Licence Confirmation constitute an agreement /i
  );
  expect(tcText).toBeInTheDocument();
});
