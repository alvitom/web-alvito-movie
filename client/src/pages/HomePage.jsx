import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/MovieList/Header";
import MovieList from "../components/MovieList/MovieList";
import { getMovieList } from "../api";

const apiKey = process.env.REACT_APP_APIKEY;

const HomePage = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState([]);
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesTopRated, setMoviesTopRated] = useState([]);
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const query = `page=1&api_key=${apiKey}`;
        const [getMoviesNowPlaying] = await getMovieList("now_playing", query, 6);
        setMoviesNowPlaying(getMoviesNowPlaying);
        const [getMoviesPopular] = await getMovieList("popular", query, 6);
        setMoviesPopular(getMoviesPopular);
        const [getMoviesTopRated] = await getMovieList("top_rated", query, 6);
        setMoviesTopRated(getMoviesTopRated);
        const [getMoviesUpcoming] = await getMovieList("upcoming", query, 6);
        setMoviesUpcoming(getMoviesUpcoming);
      } catch (err) {
        console.log(`Error fetching data : ${err}`);
      }
    };

    fetchMovies();
  }, []);
  return (
    <>
      <div className="container">
        {/* Sedang Tayang */}
        <section className="border-bottom border-secondary mt-5">
          <Header title="Sedang Tayang" linkHref="/now_playing" linkTitle="Lihat Semua" />
          <MovieList api={moviesNowPlaying} />
        </section>

        {/* Populer */}
        <section className="border-bottom border-secondary mt-5">
          <Header title="Populer" linkHref="/popular" linkTitle="Lihat Semua" />
          <MovieList api={moviesPopular} />
        </section>

        {/* Peringkat Teratas */}
        <section className="border-bottom border-secondary mt-5">
          <Header title="Peringkat Teratas" linkHref="/top_rated" linkTitle="Lihat Semua" />
          <MovieList api={moviesTopRated} />
        </section>

        {/* Akan Tayang */}
        <section className="border-bottom border-secondary mt-5">
          <Header title="Akan Tayang" linkHref="/upcoming" linkTitle="Lihat Semua" />
          <MovieList api={moviesUpcoming} />
        </section>
      </div>
    </>
  );
};

export default HomePage;
