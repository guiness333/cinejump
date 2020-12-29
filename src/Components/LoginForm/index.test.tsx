import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { LoginForm } from "./index";

const mockedHistoryPush = jest.fn();
const mockedLogin = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock("../../domains/Auth/Hooks", () => {
  return {
    useAuth: () => ({
      loginAuth: mockedLogin,
    }),
  };
});

describe("Login Page", () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });
  it("Should be able to login", async () => {
    const { getByPlaceholderText, getByText } = render(<LoginForm />);
    const email = getByPlaceholderText("E-mail");
    const password = getByPlaceholderText("Senha");
    const button = getByText("ENTRAR");

    fireEvent.change(email, { target: { value: "walberdev@email.com" } });
    fireEvent.change(password, { target: { value: "walberdev" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith("/home");
    });
  });

  it("Should not be able to login with invalid credentials.", async () => {
    const { getByPlaceholderText, getByText } = render(<LoginForm />);
    const email = getByPlaceholderText("E-mail");
    const password = getByPlaceholderText("Senha");
    const button = getByText("ENTRAR");

    fireEvent.change(email, { target: { value: "invalid-email" } });
    fireEvent.change(password, { target: { value: "walberdev" } });
    fireEvent.click(button);

    await waitFor(() => {
        expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });

  it("Should display an error if login fails.", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<LoginForm />);
    const email = getByPlaceholderText("E-mail");
    const password = getByPlaceholderText("Senha");
    const button = getByText("ENTRAR");
    const errorElement = getByTestId('errorMessage');

    mockedLogin.mockImplementation(() => {
        throw new Error();
    });

    fireEvent.change(email, { target: { value: "invalid-email" } });
    fireEvent.change(password, { target: { value: "walberdev" } });
    fireEvent.click(button);

    await waitFor(() => {
        expect(errorElement).toHaveTextContent(
            'Ocorreu um erro ao fazer login. Verifique suas credenciais.',
        );
    });
  });
});
