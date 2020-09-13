import React, {useEffect, useState} from "react";
import { Container } from "../Components/LoginContainer";
import { HeaderBackground, Footer } from "../Components/Components";
import { MoviesRow, MovieItem, MoviesColumn } from "./Rows/rowContainer";
import backdrop from "../../assets/AmTfxc3S22z7WWC7KAR3SPs70Bl.jpg";
import HeaderC from './Header/header';
import {
  TextContainter,
  TitleText,
  DiscriptionText,
  CategoryText,
} from "./Text/highlightText";
import MovieRow from './MovieList/movieRow';
import api, { API_KEY , LANGUAGE} from '../../services/api'; 
import Spinner from '../../assets/Spinner-0.4s-331px.svg';
import Highlight from './Highlight/highlight';

type API_MOVIE = {
  popularity: Number,
  vote_count: Number,
  video: Boolean,
  poster_path: String,
  id: Number,
  adult: Boolean,
  backdrop_path: String,
  original_language: String,
  original_title: String,
  genre_ids: [Array<Number>],
  title: String,
  vote_average: Number,
  overview: String,
  release_date: String,
}
const Home =  () => {
  useEffect(() => {
    PopularMovies();
    NowMovies();
    HighlightMovies();
  }, [])
  const [popularMovies, setPopularMovies] = useState();
  const [nowMovies, setNowMovies] = useState();

  const [topRatedMovies, setTopRatedMovies] = useState();
  const PopularMovies = async() =>{
    let movies: any;
    movies = await api.get(`/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&page=1`);
    setPopularMovies(movies.data.results);
  }
  const NowMovies = async() =>{
    let movies: any;
    movies = await api.get(`/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&page=1`);
    setNowMovies(movies.data.results);
  }
  const HighlightMovies = async() =>{
    let movies: any;
    movies = await api.get(`/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}&page=1`);
    setTopRatedMovies(movies.data.results);
  }
  return (
    <Container width="100%" >
      <HeaderBackground />
      <HeaderC />
      {topRatedMovies ?
        <Highlight movies={topRatedMovies}/>
        :
        <CategoryText><img src={Spinner} alt="Carregando"/></CategoryText> 
      }
      <CategoryText>Populares</CategoryText>
      {popularMovies ?
        <MovieRow movies={popularMovies}/>
        :
        <CategoryText><img src={Spinner} alt="Carregando"/></CategoryText> 
      }
      <CategoryText>Em exibição</CategoryText>
      {nowMovies ?
        <MovieRow movies={nowMovies}/>
        :
        <CategoryText><img src={Spinner} alt="Carregando"/></CategoryText>
      }

      <Footer />
    </Container>
  );
};

export default Home;
