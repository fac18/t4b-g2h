import React from "react";
import { render } from "@testing-library/react";
import MuseumInfo from "./MuseumInfo";

const location = {
  params: {
    id: 1
  }
};

it("renders the MuseumInfo page", () => {
  render(<MuseumInfo match={location} />);
});
