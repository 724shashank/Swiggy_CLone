import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../utils/Redux/Store";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should Load Login button in the Header Component", () => {
  render(
    <MemoryRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </MemoryRouter>
  );

  const result = screen.getByRole("button",{name:"login"})

  expect(result).toBeInTheDocument();
});

it("Should Render Header Component with Cart 0 Items", () => {
  render(
    <MemoryRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </MemoryRouter>
  );

  const cart = screen.getByText("Cart - 0")

  expect(cart).toBeInTheDocument();
});

it("Should Change the login button to loggedin", () => {
  render(
    <MemoryRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </MemoryRouter>
  );
  const loginButton = screen.getByRole("button",{name:"login"})
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button",{name:"loggedIn"})

  expect(logoutButton).toBeInTheDocument();
});