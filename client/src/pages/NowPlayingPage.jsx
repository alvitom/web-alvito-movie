import { useEffect, useState } from "react";
import HeaderMenu from "../components/utils/HeaderMenu";
import MovieList from "../components/MovieList/MovieList";
import { getMovieList } from "../api";
import Pagination from "../components/utils/Pagination";

const apiKey = process.env.REACT_APP_APIKEY;

const NowPlayingPage = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const query = `page=${page}&api_key=${apiKey}`;
        const [getMovies] = await getMovieList("now_playing", query, 20);
        const [, getTotalPages] = await getMovieList("now_playing", query, 20);
        setMoviesNowPlaying(getMovies);
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
        <HeaderMenu title="Film Sedang Tayang" page={page} />
        <MovieList colVal={3} api={moviesNowPlaying} />
        <Pagination page={page} lastPage={totalPage} setPage={setPage} />
      </div>
    </>
  );
};

export default NowPlayingPage;
