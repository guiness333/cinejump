import React, {useEffect, useState} from "react";
import logoWhite from "../../assets/Logo-white.svg";
import SearchIcon from "../../assets/FiSearch.svg";
import UserIcon from "../../assets/FaRegUserCircle.svg";
import { Container } from "../Components/LoginContainer";
import { HeaderBackground, Footer } from "../Components/Components";
import { Header, Menu, Item, Icon } from "./HeaderNav/headerNav";
import { LogoStyle, LinkStyle } from "../Components/Styles";
import { MoviesRow, MovieItem, MoviesColumn } from "./Rows/rowContainer";
import backdrop from "../../assets/AmTfxc3S22z7WWC7KAR3SPs70Bl.jpg";
import {
  TextContainter,
  TitleText,
  DiscriptionText,
  CategoryText,
} from "./Text/highlightText";
import MovieRow from './MovieList/movieRow';
import api, { API_KEY , LANGUAGE} from '../../services/api'; 



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
  }, [])
  const [popularMovies, setPopularMovies] = useState();
  const [nowMovies, setNowMovies] = useState();
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
  return (
    <Container width="100%" >
      <HeaderBackground />
      <Header>
        <Menu>
          <Item>
            <LinkStyle href="/">Filmes</LinkStyle>
          </Item>
          <Item>
            <LinkStyle href="/">Séries</LinkStyle>
          </Item>
        </Menu>
        <Menu>
          <Item>
            <LinkStyle href="/">
              <LogoStyle src={logoWhite} />
            </LinkStyle>
          </Item>
        </Menu>
        <Menu>
          <Item>
            <LinkStyle href="/">
              <Icon src={SearchIcon} />
            </LinkStyle>
          </Item>
          <Item>
            <LinkStyle href="/">
              <Icon src={UserIcon} />
            </LinkStyle>
          </Item>
        </Menu>
      </Header>
      <MoviesRow scroll={"hidden"}>
        <TextContainter>
          <TitleText>1917</TitleText>
          <DiscriptionText>
            Lightning McQueen, a hotshot rookie race car driven to succeed,
            discovers that life is about the journey, not the finish line, when
            he finds himself unexpectedly detoured in the sleepy Route Lightning
            McQueen, a hotshot rookie race car driven to succeed, discovers that
            life is about the journey, not the finish line, when he finds
            himself unexpectedly detoured in the sleepy Route
          </DiscriptionText>
        </TextContainter>
        <MovieItem src={backdrop} width={718} height={328} align={"inline"} />
        <MoviesColumn>
          <MovieItem src={backdrop} width={270} height={159} align={"block"} />
          <MovieItem src={backdrop} width={270} height={159} align={"block"} />
        </MoviesColumn>
      </MoviesRow>
      <CategoryText>Populares</CategoryText>
      {popularMovies ?
        <MovieRow movies={popularMovies}/>
        :
        <CategoryText>Carregando...</CategoryText>
      }
      <CategoryText>Em exibição</CategoryText>
      {nowMovies ?
        <MovieRow movies={nowMovies}/>
        :
        <CategoryText>Carregando...</CategoryText>
      }

      <Footer />
    </Container>
  );
};

export default Home;
