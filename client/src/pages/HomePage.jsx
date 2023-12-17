import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/MovieList/Header";
import MovieList from "../components/MovieList/MovieList";
import { getMovieList, getTvList } from "../api";
import Slideshow from "../components/Carousel/Carousel";

const apiKey = process.env.REACT_APP_APIKEY;

const HomePage = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState([]);
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesTopRated, setMoviesTopRated] = useState([]);
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);
  const [tvAiringToday, setTvAiringToday] = useState([]);
  const [tvOnTheAir, setTvOnTheAir] = useState([]);
  const [tvPopular, setTvPopular] = useState([]);
  const [tvTopRated, setTvTopRated] = useState([]);

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
        const [getTvAiringToday] = await getTvList("airing_today", query, 6);
        setTvAiringToday(getTvAiringToday);
        const [getTvOnTheAir] = await getTvList("on_the_air", query, 6);
        setTvOnTheAir(getTvOnTheAir);
        const [getTvPopular] = await getTvList("popular", query, 6);
        setTvPopular(getTvPopular);
        const [getTvTopRated] = await getTvList("top_rated", query, 6);
        setTvTopRated(getTvTopRated);
      } catch (err) {
        console.log(`Error fetching data : ${err}`);
      }
    };

    fetchMovies();
  }, []);
  return (
    <>
      <div className="container">
        <Slideshow movies={moviesNowPlaying} />
        <h2 className="mt-5 text-center text-light">Movie</h2>

        {/* Sedang Tayang */}
        <section className="border-bottom border-secondary mt-4">
          <Header title="Sedang Tayang" linkHref="/now_playing" linkTitle="Lihat Semua" />
          <MovieList movies={moviesNowPlaying} />
        </section>

        {/* Populer */}
        <section className="border-bottom border-secondary mt-5">
          <Header title="Populer" linkHref="/popular" linkTitle="Lihat Semua" />
          <MovieList movies={moviesPopular} />
        </section>

        {/* Peringkat Teratas */}
        <section className="border-bottom border-secondary mt-5">
          <Header title="Peringkat Teratas" linkHref="/top_rated" linkTitle="Lihat Semua" />
          <MovieList movies={moviesTopRated} />
        </section>

        {/* Akan Tayang */}
        <section className="border-bottom border-secondary mt-5">
          <Header title="Akan Tayang" linkHref="/upcoming" linkTitle="Lihat Semua" />
          <MovieList movies={moviesUpcoming} />
        </section>

        <h1 className="mt-5 text-center text-light">Serial TV</h1>

        {/* Tayang Hari Ini */}
        <section className="border-bottom border-secondary mt-4">
          <Header title="Tayang Hari Ini" linkHref="/airing_today" linkTitle="Lihat Semua" />
          <MovieList api={tvAiringToday} />
        </section>

        {/* Sedang Tayang */}
        <section className="border-bottom border-secondary mt-5">
          <Header title="Sedang Tayang" linkHref="/on_the_air" linkTitle="Lihat Semua" />
          <MovieList api={tvOnTheAir} />
        </section>

        {/* Populer */}
        <section className="border-bottom border-secondary mt-5">
          <Header title="Populer" linkHref="/popular" linkTitle="Lihat Semua" />
          <MovieList api={tvPopular} />
        </section>
        
        {/* Peringkat Teratas */}
        <section className="border-bottom border-secondary mt-5">
          <Header title="Peringkat Teratas" linkHref="/top_rated" linkTitle="Lihat Semua" />
          <MovieList api={tvTopRated} />
        </section>
      </div>
    </>
  );
};

export default HomePage;
