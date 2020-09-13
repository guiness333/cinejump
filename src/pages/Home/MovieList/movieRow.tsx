import React from "react";

import { MoviesRow, MovieItem } from "../Rows/rowContainer";
import { MovieContainer } from "./movieList";

import backdrop from "../../../assets/AmTfxc3S22z7WWC7KAR3SPs70Bl.jpg";

const MovieRow = (props: any) => {
  return (
      <MoviesRow scroll={"none"}>
        <MovieContainer>
          <MovieItem src={backdrop} width={140} height={180}  />
        </MovieContainer>
        <MovieContainer>
          <MovieItem src={backdrop} width={140} height={180}  />
        </MovieContainer>
        <MovieContainer>
          <MovieItem src={backdrop} width={140} height={180}  />
        </MovieContainer>
        <MovieContainer>
          <MovieItem src={backdrop} width={140} height={180} />
        </MovieContainer>
        <MovieContainer>
          <MovieItem src={backdrop} width={140} height={180} />
        </MovieContainer>
        <MovieContainer>
          <MovieItem src={backdrop} width={140} height={180}  />
        </MovieContainer>
        <MovieContainer>
          <MovieItem src={backdrop} width={140} height={180} />
        </MovieContainer>
      </MoviesRow>
  );
};

export default MovieRow;
