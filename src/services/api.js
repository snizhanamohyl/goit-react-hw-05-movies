import axios from 'axios';

const KEY = '39333c238f3beb7b012a47ab928bbaed';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}`
  );

  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}`);

  return response.data;
}

export async function fetchCreditsById(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY}`
  );

  return response.data.cast;
}

export async function fetchReviewsById(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY}`
  );

  return response.data.results;
}
