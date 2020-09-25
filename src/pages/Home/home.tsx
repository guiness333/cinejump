import React, { useEffect, useState, useCallback } from "react";
import {
  Container,
  HeaderBackground,
  Footer,
  Header,
  CategoryText,
  MovieRow,
  TrailerRow,
  Highlight,
} from "../../Components";
import api, { API_KEY, LANGUAGE } from "../../services/api";
import Spinner from "../../assets/Spinner-0.4s-331px.svg";
import {Popular, NowPlaying, TopRated} from '../../domains/Movie/api';
import MovieResponse from '../../domains/Movie/api/Popular/Response';

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
  const [favoritosMovies, setFavoritosMovies] = useState([] as MovieResponse[]);

  // const [popularMovies, setPopularMovies] = useState(Array<API_MOVIE>());
  const [popularMovies, setPopularMovies] = useState([] as MovieResponse[]);

  const [nowMovies, setNowMovies] = useState([] as MovieResponse[]);

  const [topRatedMovies, setTopRatedMovies] = useState([] as MovieResponse[]);

  const [videosKeys, setVideoKey] = useState(Array<String>());


  const handleClick = (movie: MovieResponse) => {
    if (
      !favoritosMovies.find((el) => el.originalTitle === movie.originalTitle)
    ) {
      setFavoritosMovies([...favoritosMovies, movie]);
      localStorage.setItem(
        "favoritos",
        JSON.stringify([...favoritosMovies, movie])
      );
    } else {
      let a = favoritosMovies.find(
        (el) => el.originalTitle === movie.originalTitle
      );
      let fav2 = favoritosMovies;
      if (a) {
        fav2.splice(favoritosMovies.indexOf(a), 1);
      }
      setFavoritosMovies([...fav2]);
      localStorage.setItem("favoritos", JSON.stringify([...fav2]));
    }
  };

  const PopularMovies = useCallback(async () => {
    const response = await Popular();
    setPopularMovies(response);
  }, []);

  const getTrailers = useCallback(async (id: any) => {
    let movies: any;
    movies = await api.get(
      `/movie/${id}/videos?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
    );

    return movies.data.results[0].key;
  }, []);

  const NowMovies = useCallback(async () => {
    const response = await NowPlaying();

    setNowMovies(response);

    let a, b, c;
    a = await getTrailers(response[0].id);
    b = await getTrailers(response[1].id);
    c = await getTrailers(response[2].id);
    setVideoKey([...videosKeys, a, b, c]);

  }, [videosKeys, getTrailers]);

  const HighlightMovies = useCallback(async () => {
    const response = await TopRated();
    setTopRatedMovies(response);
  },[]);

  useEffect(() => {
    HighlightMovies();
    PopularMovies();
    NowMovies();
    let fav = localStorage.getItem("favoritos");
    if (fav) {
      setFavoritosMovies(JSON.parse(fav));
    }
  }, []);

  return (
    <Container width="100%">
      <HeaderBackground />
      <Header />
      {topRatedMovies.length > 0 ? (
        <Highlight movies={topRatedMovies} />
      ) : (
        <CategoryText>
          <img src={Spinner} alt="Carregando" />
        </CategoryText>
      )}
      <CategoryText color={"#E83F5B"}>Populares</CategoryText>
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
      <CategoryText color={"#E83F5B"}>Em exibição</CategoryText>
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
        <TrailerRow trailers={videosKeys} />
      ) : (
        <CategoryText>
          <img src={Spinner} alt="Carregando" />
        </CategoryText>
      )}
      <CategoryText color={"#E83F5B"}>Favoritos</CategoryText>
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
