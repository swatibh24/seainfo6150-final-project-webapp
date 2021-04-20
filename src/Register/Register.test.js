import React from "react";
import { render } from "@testing-library/react";
import Register from "./Register.jsx";


describe("Register tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Register />);
      expect(container).toMatchSnapshot();
    });
  });