import http from "./httpService";

export function getMovies(query) {
  return http.get(
    `/movie?api_key=${process.env.REACT_APP_TMOB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
}
