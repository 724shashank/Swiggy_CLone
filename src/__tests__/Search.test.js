import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Rendering the Body Component with Search button and Search Input box", () => {
  render(
    <MemoryRouter>
      <Body />
    </MemoryRouter>
  );

  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchButton);

  const restCard = screen.getAllByTestId("resCard");
  expect(restCard.length).toBe(5);
});
