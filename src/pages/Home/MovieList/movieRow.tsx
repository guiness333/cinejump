import React from "react";

import { MoviesRow, MovieItem } from "../Rows/rowContainer";
import { MovieContainer } from "./movieList";
import {Favorito} from '../../Components/Favorito';
import BlackHeart from '../../../assets/BsHeartFill-black.svg';
import RedHeart from '../../../assets/BsHeartFill-red.svg';

const MovieRow = (props: any) => {
  return (
    <MoviesRow scroll={"none"}>
      {props.movies.map((movie: any) => {
          return (
            <MovieContainer key={movie.id}>
            {props.favoritos &&
            <Favorito src={props.favoritos.find((el: any) => el.original_title === movie.original_title) ? RedHeart : BlackHeart} className="favorito" onClick={() => props.click(movie)}/>
            }
            {
              props.favorito &&
              <Favorito src={RedHeart} className="favorito" onClick={() => props.click(movie)}/>
            }
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
