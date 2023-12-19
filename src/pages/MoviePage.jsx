import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieList } from "../api";
import VideoPlayer from "../components/utils/VideoPlayer";

const apiKey = process.env.REACT_APP_APIKEY;

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const [casts, setCasts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isInfo, setIsInfo] = useState(0);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const query = `api_key=${apiKey}`;
        const [, , movieDetail] = await getMovieList(movieId, query);
        const [, , , credits] = await getMovieList(`${movieId}/credits`, query);
        const [, , , , videoTrailer] = await getMovieList(`${movieId}/videos`, query);
        setMovie(movieDetail);
        setCasts(credits);
        setVideos(videoTrailer);
      } catch (err) {
        console.log("Error : ", err);
      }
    };

    fetchMovie();
  }, [movieId]);

  const formatDate = (inputDate) => {
    const dateObject = new Date(inputDate);

    // Ambil komponen tanggal, bulan, dan tahun dari objek Date
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Perhatikan bahwa indeks bulan dimulai dari 0
    const year = dateObject.getFullYear();

    // Tambahkan nol di depan jika tanggal atau bulan kurang dari 10
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    // Buat string dengan format ddmmyyyy
    const formattedDateString = `${formattedDay} ${new Date(formattedMonth).toLocaleDateString("default", { month: "long" })} ${year}`;

    return formattedDateString;
  };

  const toggleInfoState = (tabIndex) => {
    if (tabIndex !== isInfo) {
      setIsInfo(tabIndex);
    }
  };

  return (
    <>
      <div className="container mt-5" style={{ height: 1000 + "px" }}>
        <div className="row justify-content-center align-items-center gap-4 gap-md-0">
          <div className="col-md-4 col-xl-3 col-6">
            <img className="rounded-3 img-fluid" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} />
          </div>
          <div className="col-md-8 col-xl-6 text-center">
            <div className="border-bottom border-secondary mx-3">
              <h1 className="text-light">
                {movie.title} ({new Date(movie.release_date).getFullYear()})
              </h1>
              <p className="text-light fs-5">{movie.tagline}</p>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <p>{formatDate(movie.release_date)}</p>
                <p>{movie.runtime} Min.</p>
              </div>
            </div>
            <div className="py-3 d-flex border-bottom border-secondary gap-4 justify-content-center align-items-center mx-3">
              <h3 className="text-light border rounded p-2">{movie.vote_average}</h3>
              <h5>
                <i className="bi bi-people"></i> {movie.vote_count} votes
              </h5>
            </div>
            <div className="py-3 d-flex gap-4 justify-content-center align-items-center">
              {movie.genres?.map((genre) => (
                <p className="text-light fs-5" key={genre.id}>
                  {genre.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mt-md-5 mt-3 mx-md-0 mx-3">
          <ul className="col-md-10 nav nav-pills justify-content-center align-items-center border-top border-bottom border-secondary p-3">
            <li className="nav-item">
              <button className={isInfo === 0 ? `nav-link active bg-danger` : `nav-link text-light`} onClick={isInfo !== 0 ? () => toggleInfoState(0) : null}>
                Info
              </button>
            </li>
            <li className="nav-item">
              <button className={isInfo === 1 ? `nav-link active bg-danger` : `nav-link text-light`} onClick={isInfo !== 1 ? () => toggleInfoState(1) : null}>
                Cast
              </button>
            </li>
            <li className="nav-item">
              <button className={isInfo === 2 ? `nav-link active bg-danger` : `nav-link text-light`} onClick={isInfo !== 2 ? () => toggleInfoState(2) : null}>
                Video
              </button>
            </li>
          </ul>
        </div>
        {isInfo === 0 ? (
          <div className="row justify-content-center align-items-center mt-md-5 mt-3 mx-md-0 mx-3">
            <div className="col-md-10 text-center">
              <h3 className="text-light text-center">Sinopsis</h3>
              <p className="fs-5 mt-4">{movie.overview}</p>
            </div>
          </div>
        ) : isInfo === 1 ? (
          casts.length > 1 ? (
            <div className="row mt-md-5 mt-3 mx-md-0 mx-3">
              <h3 className="text-light text-center">Cast</h3>
              {casts.map((cast) => {
                return cast.profile_path ? (
                  <div className="col-md-4 col-xl-3 col-sm-6 d-flex gap-3 my-4 align-items-center" key={cast.id}>
                    <img src={`${process.env.REACT_APP_BASEIMGURL}/${cast.profile_path}`} alt={cast.name} className="rounded-3 img-fluid" style={{ width: 75 + "px" }} />
                    <div className="d-flex flex-column">
                      <p>{cast.name}</p>
                      <p>{cast.character}</p>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          ) : (
            <h3 className="text-light text-center mt-md-5 mt-3">Cast Tidak Ditemukan!</h3>
          )
        ) : isInfo === 2 ? (
          videos.length > 1 ? (
            <div className="row justify-content-center align-items-center mt-md-5 mt-3 gap-1">
              <h3 className="text-light text-center">Video</h3>
              {videos.map((video) => {
                return video.type === "Trailer" && video.official ? <VideoPlayer youtubeId={video.key} key={video.id} /> : null;
              })}
            </div>
          ) : (
            <h3 className="text-light text-center mt-md-5 mt-3">Video Tidak Ditemukan!</h3>
          )
        ) : null}
      </div>
    </>
  );
};

export default MoviePage;
