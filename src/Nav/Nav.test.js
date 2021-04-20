import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Nav from "./Nav.jsx";
import { BrowserRouter, Link } from "react-router-dom";

it("renders the Nav component correctly", () => {
  const { container } = render(<BrowserRouter><Nav /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});