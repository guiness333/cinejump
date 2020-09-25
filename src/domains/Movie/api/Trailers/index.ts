import tmdb from "../../../../services/tmdb";

const Trailers = async (id: any) => {
  const response = await tmdb.get(
    `/movie/${id}/videos`
  );

  return response.data.results[0].key;
};

export default Trailers;