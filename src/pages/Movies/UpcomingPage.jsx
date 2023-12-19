import { useEffect, useState } from "react";
import HeaderMenu from "../../components/utils/HeaderMenu";
import Pagination from "../../components/utils/Pagination";
import MovieList from "../../components/CardList/MovieList";
import { getMovieList } from "../../api";

const apiKey = process.env.REACT_APP_APIKEY;

const UpcomingPage = () => {
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const query = `page=${page}&api_key=${apiKey}`;
        const [getMovies, getTotalPages] = await getMovieList("upcoming", query, 20);
        setMoviesUpcoming(getMovies);
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
        <HeaderMenu title="Film Akan Datang" page={page} />
        <MovieList colVal={3} movies={moviesUpcoming} />
        <Pagination page={page} lastPage={totalPage} setPage={setPage} />
      </div>
    </>
  );
};

export default UpcomingPage;
