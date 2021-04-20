import React from "react";
import { render } from "@testing-library/react";
import AboutUs from "./AboutUs";
import { Link, BrowserRouter } from "react-router-dom";

describe("AboutUs tests", () => {
    it("renders correctly", () => {
      const { container } = render();
      render(<BrowserRouter><AboutUs/></BrowserRouter>);
      expect(container).toMatchSnapshot();
    });
  });