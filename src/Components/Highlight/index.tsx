import React from "react";
import { MoviesRow, MovieItem, MoviesColumn } from '../Containers/rowContainer';
import {
  TextContainter,
  TitleText,
  DiscriptionText,
} from "./styles";

export const Highlight = (props: any) => {
  const tmdb = 'https://image.tmdb.org/t/p/w1280/';
  return (
    <MoviesRow scroll={"hidden"}>
      
      <MovieItem src={tmdb+props.movies[0].backdrop} width={718} height={328} align={"inline"} />
      <TextContainter pos={props.pos}>
        <TitleText>{props.movies[0].title}</TitleText>
        <DiscriptionText>{props.movies[0].overview}</DiscriptionText>
      </TextContainter>
      <MoviesColumn>
        <MovieItem src={tmdb+props.movies[1].backdrop} width={270} height={159} align={"block"} />
        <MovieItem src={tmdb+props.movies[2].backdrop} width={270} height={159} align={"block"} />
      </MoviesColumn>
    </MoviesRow>
  );
};
export default Highlight;
