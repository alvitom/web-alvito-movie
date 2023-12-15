import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async (resource, query, limitDataVal) => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${resource}?${query}`);
    const dataTotalPages = await response.data.total_pages;
    const movieDetail = await response.data;
    const dataCasts = await response.data.cast;
    const dataMovies = await response.data.results;
    const limitDataMovies = dataMovies?.slice(0, limitDataVal);
    return [limitDataMovies, dataTotalPages, movieDetail, dataCasts, dataMovies];
  } catch (err) {
    console.log(`Error fetching data : ${err}`);
  }
};

export const getMovieTotalResults = async (query, limitDataVal) => {
  try {
    const response = await axios.get(`${baseUrl}/search/movie?query=${query}`);
    const dataTotalPages = await response.data.total_pages;
    const dataTotalResults = await response.data.total_results;
    const dataMovies = await response.data.results;
    const limitDataMovies = dataMovies.slice(0, limitDataVal);
    return [limitDataMovies, dataTotalPages, dataTotalResults];
  } catch (err) {
    console.log(`Error fetching data : ${err}`);
  }
};

export const getTvList = async (resource, query, limitDataVal) => {
  try {
    const response = await axios.get(`${baseUrl}/tv/${resource}?${query}`);
    const dataTotalPages = await response.data.total_pages;
    const movieDetail = await response.data;
    const dataCasts = await response.data.cast;
    const dataMovies = await response.data.results;
    const limitDataMovies = dataMovies?.slice(0, limitDataVal);
    return [limitDataMovies, dataTotalPages, movieDetail, dataCasts, dataMovies];
  } catch (err) {
    console.log(`Error fetching data : ${err}`);
  }
};
