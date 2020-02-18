import React from "react";
import { render } from "@testing-library/react";
import PreviewPage from "./PreviewPage";

const location = {
  searchImageProps: {
    museum_id: 1,
    name: "Beaford Archive",
    image: "",
    description: "nice place",
    website: ""
  }
};

it("renders the Image preview page with props", () => {
  render(<PreviewPage location={location} />);
});