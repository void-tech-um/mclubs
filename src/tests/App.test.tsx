import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

// Change this test when implementation changes
test("renders button modal", async () => {
  // Example test
  render(<App />);
  // get button label
  const button = screen.getByLabelText("Button");
  // click button
  userEvent.click(button);
  // get modal title
  const modalTitle = screen.getByRole("heading", {
    name: "Modal from DaisyUI",
  });
});
