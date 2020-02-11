import React from "react";
import { render } from "@testing-library/react";
import Social from "./Social";

it("renders the social bar svgs", () => {
    const { getByTitle } = render(<Social />);
    const Twitter = getByTitle("Twitter");
    const LinkedIn = getByTitle("LinkedIn");
    const Facebook = getByTitle("Facebook");
    const Instagram = getByTitle("Instagram");
    expect(Twitter).toBeInTheDocument();
    expect(LinkedIn).toBeInTheDocument();
    expect(Facebook).toBeInTheDocument();
    expect(Instagram).toBeInTheDocument();
  });


