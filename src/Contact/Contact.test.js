import React from "react";
import { render } from "@testing-library/react";
import Contact from "./Contact.jsx";


describe("Contact tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Contact />);
      expect(container).toMatchSnapshot();
    });
  });