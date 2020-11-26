import tmdb from "../../../../services/tmdb";
import RawResponse from "./rawResponse";
import Response from "./Response";

export const RawMovie = async (movieId: number): Promise<RawResponse> => {
    const response = await tmdb.get(`/movie/${movieId}`);
  
    return response.data;
  };
  
  const parseResponse = (movie: RawResponse): Response => {
      let parsedMovie = {
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

    return parsedMovie;
  };
  
  const GetMovie = async (movieId: number): Promise<Response> => {
    let response: any;
    response = await RawMovie(movieId);
    return parseResponse(response);
  };
  
  export default GetMovie;
