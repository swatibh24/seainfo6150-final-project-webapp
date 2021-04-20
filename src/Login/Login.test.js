import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login.jsx";
import { BrowserRouter, Link } from "react-router-dom";

it("renders the Login component correctly", () => {
  const { container } = render(<BrowserRouter><Login /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});