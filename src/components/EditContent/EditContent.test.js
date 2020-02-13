import React from "react";
import { render } from "@testing-library/react";
import EditContent from "./EditContent";

it("renders the EditContent page", () => {
  const { getByText } = render(<EditContent />);
  const titleText = getByText(/Edit Content/i);
  expect(titleText).toBeInTheDocument();
});
