import React, { useEffect, useState } from "react";
import { Container } from "../Components/LoginContainer";
import { HeaderBackground, Footer } from "../Components/Components";
import HeaderC from "./Header/header";
import { CategoryText } from "./Text/highlightText";
import { MovieRow, TrailerRow } from "./MovieList/movieRow";
import api, { API_KEY, LANGUAGE } from "../../services/api";
import Spinner from "../../assets/Spinner-0.4s-331px.svg";
import Highlight from "./Highlight/highlight";

type API_MOVIE = {
  popularity: Number;
  vote_count: Number;
  video: Boolean;
  poster_path: String;
  id: Number;
  adult: Boolean;
  backdrop_path: String;
  original_language: String;
  original_title: String;
  genre_ids: [Array<Number>];
  title: String;
  vote_average: Number;
  overview: String;
  release_date: String;
};
const Home = () => {
  const [favoritosMovies, setFavoritosMovies] = useState(Array<API_MOVIE>());
  const [popularMovies, setPopularMovies] = useState(Array<API_MOVIE>());
  const [nowMovies, setNowMovies] = useState(Array<API_MOVIE>());
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [videosKeys, setVideoKey] = useState(Array<String>());
  useEffect(() => {
    PopularMovies();
    NowMovies();
    HighlightMovies();
    let fav = localStorage.getItem("favoritos");
    if (fav) {
      setFavoritosMovies(JSON.parse(fav));
    }
  }, []);
  const handleClick = (movie: API_MOVIE) => {
    if (
      !favoritosMovies.find((el) => el.original_title === movie.original_title)
    ) {
      console.log(favoritosMovies);
      setFavoritosMovies([...favoritosMovies, movie]);
      localStorage.setItem(
        "favoritos",
        JSON.stringify([...favoritosMovies, movie])
      );
    } else {
      let a = favoritosMovies.find(
        (el) => el.original_title === movie.original_title
      );
      let fav2 = favoritosMovies;
      if (a) {
        fav2.splice(favoritosMovies.indexOf(a), 1);
      }
      setFavoritosMovies([...fav2]);
      localStorage.setItem("favoritos", JSON.stringify([...fav2]));
    }
  };
  const PopularMovies = async () => {
    let movies: any;
    movies = await api.get(
      `/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
    );
    setPopularMovies(movies.data.results);
  };
  const NowMovies = async () => {
    let movies: any;
    movies = await api.get(
      `/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
    );
    setNowMovies(movies.data.results);
    getTrailers(movies.data.results[0].id)
  };
  const getTrailers = async (id: any) => {
    let movies: any;
    movies = await api.get(
      `/movie/${id}/videos?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
    );
    setVideoKey([...videosKeys, String(movies.data.results[0].key)]);;
  };
  const HighlightMovies = async () => {
    let movies: any;
    movies = await api.get(
      `/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
    );
    setTopRatedMovies(movies.data.results);
  };
  return (
    <Container width="100%">
      <HeaderBackground />
      <HeaderC />
      {topRatedMovies ? (
        <Highlight movies={topRatedMovies} />
      ) : (
        <CategoryText>
          <img src={Spinner} alt="Carregando" />
        </CategoryText>
      )}
      <CategoryText>Populares</CategoryText>
      {popularMovies ? (
        <MovieRow
          movies={popularMovies}
          click={handleClick}
          favoritos={favoritosMovies}
        />
      ) : (
        <CategoryText>
          <img src={Spinner} alt="Carregando" />
        </CategoryText>
      )}
      <CategoryText>Em exibição</CategoryText>
      {nowMovies ? (
        <MovieRow
          movies={nowMovies}
          click={handleClick}
          favoritos={favoritosMovies}
        />
      ) : (
        <CategoryText>
          <img src={Spinner} alt="Carregando" />
        </CategoryText>
      )}
      {videosKeys ? (
        <TrailerRow trailers={videosKeys}/>
      ) : (
        <CategoryText>
          <img src={Spinner} alt="Carregando" />
        </CategoryText>
      )}
      <CategoryText>Favoritos</CategoryText>
      {favoritosMovies ? (
        <MovieRow
          movies={favoritosMovies}
          click={handleClick}
          favorito={true}
        />
      ) : (
        <CategoryText>
          <img src={Spinner} alt="Carregando" />
        </CategoryText>
      )}

      <Footer />
    </Container>
  );
};

export default Home;
