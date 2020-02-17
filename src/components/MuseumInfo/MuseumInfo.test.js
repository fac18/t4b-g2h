import React from "react";
import { render } from "@testing-library/react";
import MuseumInfo from "./MuseumInfo";

const location = {
  partnerProps: {
    museum_id: 1,
    name: "Beaford Archive",
    image: "",
    description: "nice place",
    website: ""
  }
};

it("renders the MuseumInfo page", () => {
  render(<MuseumInfo location={location} />);
});
