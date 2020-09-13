import React from "react";

import { MoviesRow, MovieItem } from "../Rows/rowContainer";
import { MovieContainer } from "./movieList";

const MovieRow = (props: any) => {
  return (
    <MoviesRow scroll={"none"}>
      {props.movies.map((movie: any) => {
          return (
            <MovieContainer key={movie.id}>
            <MovieItem
              src={String("https://image.tmdb.org/t/p/w1280/"+movie.poster_path)}
              width={140}
              height={180}
            />
           </MovieContainer>
          );
        })
      }
    </MoviesRow>
  );
};

export default MovieRow;
