import tmdb from "../../../../services/tmdb";
import RawResponse from "./rawResponse";
import Response from "./Response";

export const rawPopular = async (): Promise<RawResponse[]> => {
  const response = await tmdb.get(`/movie/popular`);

  return response.data.results;
};

const parseResponse = (rawResponse: RawResponse[]): Response[] => {
  let response = [] as Response[];
  rawResponse.forEach((movie) => {
    const parsedMovie = {
      overview: movie.overview,
      genreIds: movie.genre_ids,
      id: movie.id,
      originalTitle: movie.original_title,
      title: movie.title,
      popularity: movie.popularity,
      voteCount: movie.vote_count,
      voteAverage: movie.vote_average,

      releaseDate: movie.release_date,
      poster: movie.poster_path,
      backdrop: movie.backdrop_path,
    } as Response;

    response = [...response, parsedMovie];
  });

  return response;
};

const Popular = async (): Promise<Response[]> => {
  let response: any;
  response = await rawPopular();
  return parseResponse(response);
};

export default Popular;