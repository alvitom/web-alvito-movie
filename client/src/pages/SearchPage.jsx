import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/MovieList/Header";
import MovieList from "../components/MovieList/MovieList";
import { useParams } from "react-router-dom";
import axios from "axios";
import Pagination from "../components/utils/Pagination";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [totalResult, setTotalResult] = useState();
  const { keyword } = useParams();

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie?query=${keyword}&page=${page}&api_key=${process.env.REACT_APP_APIKEY}`);
        const data = await response.data.results;
        const totalPages = await response.data.total_pages;
        const totalResults = await response.data.total_results
        const limitData = data.slice(0, 20);
        setMovies(limitData);
        setTotalPage(totalPages);
        setTotalResult(totalResults)
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
              <MovieList colVal={3} api={movies} />
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
