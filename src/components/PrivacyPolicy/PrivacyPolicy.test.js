import React from "react";
import { render } from "@testing-library/react";
import PrivacyPolicy from "./PrivacyPolicy";

it("renders terms and conditions text", () => {
  const { getByText } = render(<PrivacyPolicy />);
  const ppText = getByText(
    /All materials on this website are subject to the laws of copyright/i
  );
  expect(ppText).toBeInTheDocument();
});
