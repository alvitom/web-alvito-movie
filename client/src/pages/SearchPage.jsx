import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/CardList/Header";
import { useParams } from "react-router-dom";
import Pagination from "../components/utils/Pagination";
import { getTotalResults } from "../api";
import SearchList from "../components/CardList/SearchList";

const apiKey = process.env.REACT_APP_APIKEY;

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [totalResult, setTotalResult] = useState();
  const { keyword } = useParams();

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const query = `${keyword}&page=${page}&api_key=${apiKey}`;

        const [getData, getTotalPage, getTotalResult] = await getTotalResults(query, 20);
        setResults(getData);
        setTotalPage(getTotalPage);
        setTotalResult(getTotalResult);
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
          {results.length > 0 ? (
            <>
              <h4 className="text-center">Terdapat {totalResult} hasil pencarian</h4>
              <SearchList datas={results} />
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
