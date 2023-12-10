import React from "react";
import { useEffect, useState } from "react";
import { getMovieListNowPlaying, getMovieListPopular, getMovieListTopRated, getMovieListUpcoming } from "../api";
import Header from "../components/MovieList/Header";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState([]);
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesTopRated, setMoviesTopRated] = useState([]);
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);

  useEffect(() => {
    getMovieListNowPlaying().then((result) => {
      const limitData = result.slice(0, 6);
      setMoviesNowPlaying(limitData);
    });

    getMovieListPopular().then((result) => {
      const limitData = result.slice(0, 6);
      setMoviesPopular(limitData);
    });

    getMovieListTopRated().then((result) => {
      const limitData = result.slice(0, 6);
      setMoviesTopRated(limitData);
    });

    getMovieListUpcoming().then((result) => {
      const limitData = result.slice(0, 6);
      setMoviesUpcoming(limitData);
    });
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
