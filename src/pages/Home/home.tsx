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
import Spinner from "../../assets/Spinner-0.4s-331px.svg";
import {
  Popular,
  NowPlaying,
  TopRated,
  Trailers,
} from "../../domains/Movie/api";
import {AddFavorite, Favorites} from '../../domains/Cinejump';
import MovieResponse from "../../domains/Movie/api/Popular/Response";
import FavoriteResponse from '../../domains/Cinejump/Favorite/Response';
const Home = () => {
  const [favoritosMovies, setFavoritosMovies] = useState([] as FavoriteResponse[]);

  // const [popularMovies, setPopularMovies] = useState(Array<API_MOVIE>());
  const [popularMovies, setPopularMovies] = useState([] as MovieResponse[]);

  const [nowMovies, setNowMovies] = useState([] as MovieResponse[]);

  const [topRatedMovies, setTopRatedMovies] = useState([] as MovieResponse[]);

  const [videosKeys, setVideoKey] = useState(Array<String>());

  const handleClick = async (movie: FavoriteResponse) => {
    if (
      !favoritosMovies.find((el) => el.originalTitle === movie.originalTitle)
    ) {
      console.log(movie)
      ///setFavoritosMovies([...favoritosMovies, movie]);

      // localStorage.setItem(
      //   "favoritos",
      //   JSON.stringify([...favoritosMovies, movie])
      // );

      if(movie && movie.id){
        setFavoritosMovies([...favoritosMovies, movie]);
        await AddFavorite(movie.id.toString(), '1');
        //GetFavorites();
      }
    } else {
      let a = favoritosMovies.find(
        (el) => el.originalTitle === movie.originalTitle
      );
      let fav2 = favoritosMovies;
      if (a) {
        fav2.splice(favoritosMovies.indexOf(a), 1);
      }
      console.log(a);
      if (a && a.entity_id){
        setFavoritosMovies([...fav2]);
        await AddFavorite(a.entity_id.toString(), '1');
        //GetFavorites();
      }
      if (a && a.id){
        setFavoritosMovies([...fav2]);
        await AddFavorite(a.id.toString(), '1');
        //GetFavorites();
      }
      //FavoritosMovies([...fav2]);
      //localStorage.setItem("favoritos", JSON.stringify([...fav2]));
      
    }
  };

  const PopularMovies = useCallback(async () => {
    const response = await Popular();
    setPopularMovies(response);
  }, []);

  const NowMovies = useCallback(async () => {
    const response = await NowPlaying();
    setNowMovies(response);
    let a, b, c;
    a = await Trailers(response[0].id);
    b = await Trailers(response[1].id);
    c = await Trailers(response[2].id);
    setVideoKey([...videosKeys, a, b, c]);
  }, [videosKeys]);

  const HighlightMovies = useCallback(async () => {
    const response = await TopRated();
    setTopRatedMovies(response);
  }, []);
  const GetFavorites = useCallback(async () => {
    const response = await Favorites();
    console.log(response);
    setFavoritosMovies(JSON.parse(JSON.stringify(response)));
  }, [])

  useEffect(() => {
    HighlightMovies();
    PopularMovies();
    NowMovies();
    GetFavorites();
    // let fav = localStorage.getItem("favoritos");
    // if (fav) {
    //   setFavoritosMovies(JSON.parse(fav));
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

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
      {favoritosMovies.length > 0 ? (
        <MovieRow
          movies={favoritosMovies}
          click={handleClick}
          favorito={true}
        />
      ) : (
        <CategoryText>Nenhum filme adicionado aos favoritos.</CategoryText>
      )}

      <Footer />
    </Container>
  );
};

export default Home;
