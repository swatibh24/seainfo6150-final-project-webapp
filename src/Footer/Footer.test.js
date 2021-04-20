import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer.jsx";


describe("Register tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Footer />);
      expect(container).toMatchSnapshot();
    });
  });