import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/MovieList/Header";
import MovieList from "../components/MovieList/MovieList";
import { useParams } from "react-router-dom";
import Pagination from "../components/utils/Pagination";
import { getMovieTotalResults } from "../api";

const apiKey = process.env.REACT_APP_APIKEY;

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [totalResult, setTotalResult] = useState();
  const { keyword } = useParams();

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const query = `${keyword}&page=${page}&api_key=${apiKey}`;

        const [getMovies, getTotalPages, getTotalResults] = await getMovieTotalResults(query, 20);
        setMovies(getMovies);
        setTotalPage(getTotalPages);
        setTotalResult(getTotalResults);
      } catch (err) {
        console.log("Error : ", err);
      }
    };

    getMovieList();
  }, [keyword, page]);
  return (
    <>
      <div className="container">
        <section className="mt-5">
          <Header title={`Hasil pencarian : ${keyword}`} />
          {movies.length > 0 ? (
            <>
              <h4 className="text-center">Terdapat {totalResult} film ditemukan</h4>
              <MovieList colVal={3} movies={movies} />
              <Pagination page={page} lastPage={totalPage} setPage={setPage} />
            </>
          ) : (
            <h4 className="text-center">Terdapat {totalResult} film ditemukan</h4>
          )}
        </section>
      </div>
    </>
  );
};

export default SearchPage;
