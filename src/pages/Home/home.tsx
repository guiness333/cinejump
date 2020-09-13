import React, { useEffect, useState } from "react";
import { Container } from "../Components/LoginContainer";
import { HeaderBackground, Footer } from "../Components/Components";
import HeaderC from "./Header/header";
import { CategoryText } from "./Text/highlightText";
import MovieRow from "./MovieList/movieRow";
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
  const [favoritos, setFavoritos] = useState(Array<String>());
  const [popularMovies, setPopularMovies] = useState();
  const [nowMovies, setNowMovies] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();

  useEffect(() => {
    PopularMovies();
    NowMovies();
    HighlightMovies();
  }, []);
  useEffect(() => {
    console.log('atualizou');
  }, [favoritos]);
  const handleClick = (movie: API_MOVIE) => {
    if (!favoritos.includes(movie.original_title)) {
      setFavoritos([...favoritos, movie.original_title]);

      console.log('poe')
    }else{
      let fav = favoritos;
      fav.splice(favoritos.indexOf(movie.original_title), 1);
      console.log('tira')
      setFavoritos([...fav]);
    }
    console.log(favoritos);
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
        <MovieRow movies={popularMovies} click={handleClick} favoritos={favoritos}/>
      ) : (
        <CategoryText>
          <img src={Spinner} alt="Carregando" />
        </CategoryText>
      )}
      <CategoryText>Em exibição</CategoryText>
      {nowMovies ? (
        <MovieRow movies={nowMovies} click={handleClick} favoritos={favoritos}/>
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
