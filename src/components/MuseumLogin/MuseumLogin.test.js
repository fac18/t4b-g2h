import React from "react";
import { render } from "@testing-library/react";
import MuseumLogin from "./MuseumLogin";

it("renders the MuseumLogin page", () => {
  const { getByText } = render(<MuseumLogin />);
  const loginText = getByText(/Museum login/i);
  expect(loginText).toBeInTheDocument();
});
