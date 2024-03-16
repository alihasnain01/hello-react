import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should be render", () => {
  // render

  render(<Contact />);

  // query
  const heading = screen.queryByRole("heading");

  // assertion

  expect(heading).toBeTruthy();
});

test("have a button or not", () => {
  // render
  render(<Contact />);

  // query

  const button = screen.queryByRole("button");

  // assertion

  expect(button).toBeInTheDocument();
});

test("have a button or not", () => {
  // render
  render(<Contact />);

  // query
  const button = screen.getByText("Contact Us");

  // assertion

  expect(button).toBeInTheDocument();
});
