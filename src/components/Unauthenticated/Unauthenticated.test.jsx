// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import Unauthenticated from "./Unauthenticated";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

test("Testing email and password input", async () => {
  const user = userEvent.setup();
  render(<Unauthenticated />);
  const userData = { email: "testino@testino", password: "secret" };

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const passInput = screen.getByLabelText(/Password/i);

  await user.type(
    screen.getByRole("textbox", {
      name: /email/i,
    }),
    userData.email
  );
  await user.type(screen.getByLabelText(/Password/i), userData.password);
  
  screen.debug();
  expect(emailInput.value).toBe("testino@testino");
  expect(passInput.value).toBe("secret");
});
