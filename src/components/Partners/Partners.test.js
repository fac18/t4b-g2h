import React from "react";
import { render } from "@testing-library/react";
import Partners from "./Partners";

it("renders the Partners page", () => {
  const { getByText } = render(<Partners />);
  const titleText = getByText(/Our Partners/i);
  expect(titleText).toBeInTheDocument();
});
