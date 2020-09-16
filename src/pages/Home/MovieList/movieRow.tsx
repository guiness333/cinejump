import React from "react";
import { CategoryText } from "../Text/highlightText";
import {
  MoviesRow,
  MovieItem,
  TrailerContainer,
  Trailers,
  Videos,
  Frame,
} from "../Rows/rowContainer";
import { MovieContainer } from "./movieList";
import { Favorito } from "../../Components/Favorito";
import BlackHeart from "../../../assets/BsHeartFill-black.svg";
import RedHeart from "../../../assets/BsHeartFill-red.svg";

export const MovieRow = (props: any) => {
  return (
    <MoviesRow scroll={"none"}>
      {props.movies.map((movie: any) => {
        return (
          <MovieContainer key={movie.id}>
            {props.favoritos && (
              <Favorito
                src={
                  props.favoritos.find(
                    (el: any) => el.original_title === movie.original_title
                  )
                    ? RedHeart
                    : BlackHeart
                }
                className="favorito"
                onClick={() => props.click(movie)}
              />
            )}
            {props.favorito && (
              <Favorito
                src={RedHeart}
                className="favorito"
                onClick={() => props.click(movie)}
              />
            )}
            <MovieItem
              src={String(
                "https://image.tmdb.org/t/p/w1280/" + movie.poster_path
              )}
              width={140}
              height={180}
            />
          </MovieContainer>
        );
      })}
    </MoviesRow>
  );
};
export const TrailerRow = (props: any) => {
  return (
    <TrailerContainer>
      <CategoryText color={'white'}>Trailers</CategoryText>
      <Videos>
        {props.trailers &&
          props.trailers.map((trailer: any) => {
            return (
              <Trailers>
                <Frame title={trailer}
                  width="360"
                  height="280"
                  src={`https://www.youtube.com/embed/${trailer}`}
                ></Frame>
              </Trailers>
            );
          })}
      </Videos>
    </TrailerContainer>
  );
};
