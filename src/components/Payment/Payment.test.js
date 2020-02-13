import React from "react";
import { render } from "@testing-library/react";
import Payment from "./Payment";

it("renders the Payment page", () => {
  const { getByText } = render(<Payment />);
  const titleText = getByText(/Payment Details/i);
  expect(titleText).toBeInTheDocument();
});
