import React from "react";
import { render } from "@testing-library/react";
import PrivacyPolicy from "./PrivacyPolicy";

it("renders terms and conditions text", () => {
  const { getByText } = render(<PrivacyPolicy />);
  const ppText = getByText(
    /information has infringed the Regulation/i
  );
  expect(ppText).toBeInTheDocument();
});
