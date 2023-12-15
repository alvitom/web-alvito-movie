import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/utils/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpcomingPage";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/now_playing" element={<NowPlayingPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/top_rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
        {/* <Route path="/tv/:seriesId" element={<MoviePage />} /> */}
        <Route path="/search/:keyword" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
