import axios from "axios";

const API_KEY = "966c326f";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
    },
  });
  return response.data;
};

export const getMovieById = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: id,
    },
  });
  return response.data;
};