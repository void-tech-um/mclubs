import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

// Change this test when implementation changes
test("renders button modal", async () => {
  // Example test
  render(<App />);
  // get button
  const button = screen.getByRole("button", { name: /login/i });
  // click button
  userEvent.click(button);
  // get modal element
  const modal = screen.getByText(/join mclubs/i);
  // check if modal is visible
  expect(modal).toBeVisible();
});
