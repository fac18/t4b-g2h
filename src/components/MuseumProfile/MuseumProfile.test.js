import React from "react";
import { render } from "@testing-library/react";
import MuseumProfile from "./MuseumProfile";

it("contains an add new service button", () => {
  const { getByText } = render(<MuseumProfile />);
  const addTextButton = getByText(/Add new content/i);
  expect(addTextButton).toBeInTheDocument();
});
