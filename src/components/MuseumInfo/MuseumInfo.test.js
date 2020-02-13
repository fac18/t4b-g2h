import React from "react";
import { render } from "@testing-library/react";
import MuseumInfo from "./MuseumInfo";

it("renders the MuseumInfo page", () => {
  const { getByText } = render(<MuseumInfo />);
  const titleText = getByText(/Description/i);
  expect(titleText).toBeInTheDocument();
});
