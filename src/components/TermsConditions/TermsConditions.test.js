import React from "react";
import { render } from "@testing-library/react";
import TermsConditions from "./TermsConditions";

it("renders terms and conditions text", () => {
  const { getByText } = render(<TermsConditions />);
  const tcText = getByText(
    /in the preceding two sentences of this clause 16.5./i
  );
  expect(tcText).toBeInTheDocument();
});
