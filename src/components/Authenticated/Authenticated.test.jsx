// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import userEvent from "@testing-library/user-event";
import Authenticated from "./Authenticated";
// import "@testing-library/jest-dom/vitest";

test("Cheking form task inputs", async() => {
  const user = userEvent.setup()

  render(<Authenticated />)

  const taskData = { name: "read from campus lessons", date: "12/24/1993"}
  const taskInput = screen.getByTestId('#input_name')
  const dateInput = screen.getByTestId('#due_date')

  await user.type(taskInput, taskData.name)
  console.log("tassk",taskInput.value)
  // await user.click(dateInput)
  // fireEvent.change(dateInput, taskData.date)
  
  // screen.debug();
  expect(taskInput.value).toBe(taskData.name);
  // expect(dateInput.value).toBe(taskData.date)
});