import { useEffect, useState } from "react";
import HeaderMenu from "../components/utils/HeaderMenu";
import Pagination from "../components/utils/Pagination";
import MovieList from "../components/MovieList/MovieList";
import { getMovieList } from "../api";

const apiKey = process.env.REACT_APP_APIKEY;

const TopRatedPage = () => {
  const [moviesTopRated, setMoviesTopRated] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const query = `page=${page}&api_key=${apiKey}`;
        const [getMovies, getTotalPages] = await getMovieList("top_rated", query, 20);
        setMoviesTopRated(getMovies);
        setTotalPage(getTotalPages);
      } catch (err) {
        console.log(`Error fetching data : ${err}`);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <>
      <div className="container">
        <HeaderMenu title="Film Peringkat Teratas" page={page} />
        <MovieList colVal={3} api={moviesTopRated} />
        <Pagination page={page} lastPage={totalPage} setPage={setPage} />
      </div>
    </>
  );
};

export default TopRatedPage;
