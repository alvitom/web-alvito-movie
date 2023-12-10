import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieListNowPlaying = async () => {
  try {
    const movie = await axios.get(`${baseUrl}/movie/now_playing?page=1&api_key=${apiKey}`);
    return movie.data.results;
  } catch (err) {
    console.log(`Error fetching data : ${err}`);
  }
};

export const getMovieListPopular = async () => {
  try {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
    return movie.data.results;
  } catch (err) {
    console.log(`Error fetching data : ${err}`);
  }
};

export const getMovieListTopRated = async () => {
  try {
    const movie = await axios.get(`${baseUrl}/movie/top_rated?page=1&api_key=${apiKey}`);
    return movie.data.results;
  } catch (err) {
    console.log(`Error fetching data : ${err}`);
  }
};

export const getMovieListUpcoming = async () => {
  try {
    const movie = await axios.get(`${baseUrl}/movie/upcoming?page=1&api_key=${apiKey}`);
    return movie.data.results;
  } catch (err) {
    console.log(`Error fetching data : ${err}`);
  }
};
