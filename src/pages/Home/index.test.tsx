import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Home from "./home";

const mockedLogin = jest.fn();
const mockedFavorites = jest.fn();
jest.mock("../../domains/Auth/Hooks", () => {
  return {
    useAuth: () => ({
      loginAuth: mockedLogin,
    }),
  };
});

jest.mock("../../domains/Cinejump", () => {
  return {
      Favorites: () => {return ['Walber']},
      AddFavorite: () => mockedFavorites
  }
})
jest.mock("../../domains/Movie/api", () => {
  return {
    Popular:() => mockedFavorites,
    NowPlaying:() => mockedFavorites,
    TopRated:() => mockedFavorites,
    Trailers:() => mockedFavorites,
  }
})


describe("Home Page", () => {
  it("Shoud render categories", async () => {
    const { getByText } = render(<Home />);   
    const populares = getByText("Populares");
    const exibicao = getByText("Em exibição");
    const favoritos = getByText("Favoritos");
    const trailers = getByText("Trailers");
    expect(populares).toBeTruthy();
    expect(exibicao).toBeTruthy();
    expect(favoritos).toBeTruthy();
    expect(trailers).toBeTruthy();
  });

  it("Should render movies", async () => {
    render(<Home />);

    expect(mockedFavorites).toBeCalled();
  })

});
