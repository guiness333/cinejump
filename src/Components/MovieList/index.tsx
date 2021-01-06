import React from "react";
import { CategoryText } from "../Text";
import {
  MoviesRow,
  MovieItem,
  TrailerContainer,
  Trailers,
  Videos,
  Frame,
} from "../Containers/rowContainer";
import { MovieContainer } from "./movieList";
import { Favorito } from "../Favorito";

export const MovieRow = (props: any) => {
  return (
    <MoviesRow scroll={"none"}>
      {props.movies.map((movie: any) => {
        return (
          <MovieContainer key={movie.id}>
            {props.favoritos && (
              <Favorito
                fill={
                  props.favoritos.find(
                    (el: any) => el.originalTitle === movie.originalTitle
                  )
                    ? '#E83F5B'
                    : '#000'
                }
                data-testid={`favorito-${movie.id}`}
                className="favorito"
                onClick={() => props.click(movie)}
              />
            )}
            {props.favorito && (
              <Favorito
                fill={"#E83F5B"}
                className="favorito"
                onClick={() => props.click(movie)}
              />
            )}
            <MovieItem
              src={String(
                "https://image.tmdb.org/t/p/w1280/" + movie.poster
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
              <Trailers key={trailer}>
                <Frame title={trailer}
                  width="360"
                  height="280"
                  src={`https://www.youtube-nocookie.com/embed/${trailer}`}
                ></Frame>
              </Trailers>
            );
          })}
      </Videos>
    </TrailerContainer>
  );
};
