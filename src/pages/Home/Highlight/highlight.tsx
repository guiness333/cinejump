import React from "react";
import { MoviesRow, MovieItem, MoviesColumn } from "../Rows/rowContainer";
import {
  TextContainter,
  TitleText,
  DiscriptionText,
} from "../Text/highlightText";

const Highlight = (props: any) => {
  return (
    <MoviesRow scroll={"hidden"}>
      <TextContainter>
        <TitleText>{props.movies[0].title}</TitleText>
        <DiscriptionText>{props.movies[0].overview}</DiscriptionText>
      </TextContainter>
      <MovieItem src={"https://image.tmdb.org/t/p/w1280/"+props.movies[0].backdrop_path} width={718} height={328} align={"inline"} />
      <MoviesColumn>
        <MovieItem src={"https://image.tmdb.org/t/p/w1280/"+props.movies[1].backdrop_path} width={270} height={159} align={"block"} />
        <MovieItem src={"https://image.tmdb.org/t/p/w1280/"+props.movies[2].backdrop_path} width={270} height={159} align={"block"} />
      </MoviesColumn>
    </MoviesRow>
  );
};
export default Highlight;
