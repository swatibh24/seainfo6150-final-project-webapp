import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AllCategory from "./AllCategory.jsx";
import { BrowserRouter, Link } from "react-router-dom";

it("renders the AllCategory component correctly", () => {
  const { container } = render(<BrowserRouter><AllCategory /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});