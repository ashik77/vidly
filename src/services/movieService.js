import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/movies";

function movieUrl(id) {
  return `${apiEndpoint}/{id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  //updating movie
  if (movie._id) {
    const body = { ...movie };
    delete body._id; //since movie obj has id property and our restful api in the backend doesn't like the id in the body property, so one id in url and one in body of the request which is confusing. so we should remove the id from movie obj but also our movie obj is part of the state so we should not directly modify our state.
    return http.put(movieUrl(movie._id), body);
  }
  //saving a new movie
  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
