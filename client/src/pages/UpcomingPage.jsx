import { useEffect, useState } from "react";
import HeaderMenu from "../components/utils/HeaderMenu";
import Pagination from "../components/utils/Pagination";
import MovieList from "../components/MovieList/MovieList";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

const UpcomingPage = () => {
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movie = await axios.get(`${baseUrl}/movie/upcoming?page=${page}&api_key=${apiKey}`);
        const data = await movie.data.results;
        const totalPages = await movie.data.total_pages;
        const limitData = data.slice(0, 20);
        setMoviesUpcoming(limitData);
        setTotalPage(totalPages);
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
        <MovieList colVal={3} api={moviesUpcoming} />
        <Pagination page={page} lastPage={totalPage} setPage={setPage}/>
      </div>
    </>
  );
};

export default UpcomingPage;
