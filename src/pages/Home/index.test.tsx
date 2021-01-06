import React from "react";
import { render, waitFor, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Home from "./home";

const mockedLogin = jest.fn();
const mockedFavorites = jest.fn(() => {return [{"adult":false,"backdrop_path":"/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg","genre_ids":[10749,35],"id":761054,"original_language":"en","original_title":"Gabriel's Inferno Part III","overview":"The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.","popularity":36.269,"poster_path":"/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg","release_date":"2020-11-19","title":"Gabriel's Inferno Part III","video":false,"vote_average":9.1,"vote_count":563}]});
const mockedTopRate = jest.fn(() => {return [{"adult":false,"backdrop_path":"/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg","genre_ids":[10749,35],"id":761053,"original_language":"en","original_title":"Gabriel's Inferno Part III","overview":"The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.","popularity":36.269,"poster_path":"/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg","release_date":"2020-11-19","title":"Gabriel's Inferno Part III","video":false,"vote_average":9.1,"vote_count":563},{"adult":false,"backdrop_path":"/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg","genre_ids":[10749,35],"id":761055,"original_language":"en","original_title":"Gabriel's Inferno Part III","overview":"The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.","popularity":36.269,"poster_path":"/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg","release_date":"2020-11-19","title":"Gabriel's Inferno Part III","video":false,"vote_average":9.1,"vote_count":563},{"adult":false,"backdrop_path":"/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg","genre_ids":[10749,35],"id":761055,"original_language":"en","original_title":"Gabriel's Inferno Part III","overview":"The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.","popularity":36.269,"poster_path":"/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg","release_date":"2020-11-19","title":"Gabriel's Inferno Part III","video":false,"vote_average":9.1,"vote_count":563}]});
const mockedNowPlaying = jest.fn(() => {return [{"adult":false,"backdrop_path":"/srYya1ZlI97Au4jUYAktDe3avyA.jpg","genre_ids":[14,28,12],"id":464052,"original_language":"en","original_title":"Wonder Woman 1984","overview":"Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.","popularity":6017.605,"poster_path":"/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg","release_date":"2020-12-25","title":"Wonder Woman 1984","video":false,"vote_average":7.3,"vote_count":2153},{"adult":false,"backdrop_path":"/dueiWzWc81UAgnbDAyH4Gjqnh4n.jpg","genre_ids":[18,878],"id":614911,"original_language":"en","original_title":"The Midnight Sky","overview":"A lone scientist in the Arctic races to contact a crew of astronauts returning home to a mysterious global catastrophe.","popularity":3402.617,"poster_path":"/51JxCk77ZCqLzbLkrDl9Qho6KUh.jpg","release_date":"2020-12-11","title":"The Midnight Sky","video":false,"vote_average":6,"vote_count":748},{"adult":false,"backdrop_path":"/cjaOSjsjV6cl3uXdJqimktT880L.jpg","genre_ids":[12,14,10751,16],"id":529203,"original_language":"en","original_title":"The Croods: A New Age","overview":"Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.","popularity":1586.556,"poster_path":"/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg","release_date":"2020-11-25","title":"The Croods: A New Age","video":false,"vote_average":7.8,"vote_count":954}]});
const mockedPopular = jest.fn(() => {return [{"adult":false,"backdrop_path":"/cjaOSjsjV6cl3uXdJqimktT880L.jpg","genre_ids":[12,14,10751,16],"id":529204,"original_language":"en","original_title":"The Croods: A New Age","overview":"Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.","popularity":1586.556,"poster_path":"/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg","release_date":"2020-11-25","title":"The Croods: A New Age","video":false,"vote_average":7.8,"vote_count":954}]});

function makeid(length: number) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
} 

const mockedTrailers = jest.fn(() => makeid(9));

afterEach(cleanup);

jest.mock("../../domains/Auth/Hooks", () => {
  return {
    useAuth: () => ({
      loginAuth: mockedLogin,
    }),
  };
});

jest.mock("../../domains/Cinejump", () => {
  return {
      Favorites: () => mockedFavorites(),
      AddFavorite: () => mockedLogin
  }
})

jest.mock("../../domains/Movie/api", () => {
  
  return {
    Popular:() => mockedPopular(),
    NowPlaying:() => mockedNowPlaying(),
    TopRated:() => mockedTopRate(),
    Trailers:() => mockedTrailers(),
  }
})


describe("Home Page", () => {
  it("Shoud render categories", async () => {
    const { getByText } = render(<Home />);   
    const populares = getByText("Populares");
    const exibicao = getByText("Em exibição");
    const favoritos = getByText("Favoritos");
    const trailers = getByText("Trailers");
    await waitFor(() => expect(populares).toBeTruthy());
    await waitFor(() => expect(exibicao).toBeTruthy());
    await waitFor(() => expect(favoritos).toBeTruthy());
    await waitFor(() => expect(trailers).toBeTruthy());
  });

  it("Should render movies", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(mockedFavorites).toBeCalled();
    });
  });

  it("Should render favorites", async ()=> {
    const {findByTestId } = render(<Home />);
    const fav = await findByTestId("favorito-464052");
    expect(fav).toBeTruthy();
  });

});
