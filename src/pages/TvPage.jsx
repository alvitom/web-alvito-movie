import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvList } from "../api";
import Episodes from "../components/TvSeriesDetails/Episodes";
import Casts from "../components/TvSeriesDetails/Casts";
import Info from "../components/TvSeriesDetails/Info";
import Videos from "../components/TvSeriesDetails/Videos";

const apiKey = process.env.REACT_APP_APIKEY;

const TvPage = () => {
  const [tv, setTv] = useState([]);
  const [casts, setCasts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isInfo, setIsInfo] = useState(0);
  const { seriesId } = useParams();

  useEffect(() => {
    const fetchTv = async () => {
      try {
        const query = `api_key=${apiKey}`;
        const [, , tvDetail] = await getTvList(seriesId, query);
        const [, , , credits] = await getTvList(`${seriesId}/credits`, query);
        const [, , , , videoTrailer] = await getTvList(`${seriesId}/videos`, query);
        setTv(tvDetail);
        setCasts(credits);
        setVideos(videoTrailer);
      } catch (err) {
        console.log("Error : ", err);
      }
    };

    fetchTv();
  }, [seriesId]);

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
      <div className="container mt-5" style={{ height: 3000 + "px" }}>
        <div className="row justify-content-center align-items-center gap-4 gap-md-0">
          <div className="col-md-4 col-xl-3 col-6">
            <img className="rounded-3 img-fluid" src={`${process.env.REACT_APP_BASEIMGURL}/${tv.poster_path}`} alt={tv.name} />
          </div>
          <div className="col-md-8 col-xl-6 text-center">
            <div className="border-bottom border-secondary mx-3">
              <h1 className="text-light">
                {tv.name} ({new Date(tv.first_air_date).getFullYear()})
              </h1>
              <p className="text-light fs-5">{tv.tagline}</p>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <p>{formatDate(tv.first_air_date)}</p>
                <p className="text-danger">{tv.networks?.map((data) => data.name)}</p>
              </div>
            </div>
            <div className="py-3 d-flex border-bottom border-secondary gap-4 justify-content-center align-items-center mx-3">
              <h3 className="text-light border rounded p-2">{tv.vote_average}</h3>
              <h5>
                <i className="bi bi-people"></i> {tv.vote_count} votes
              </h5>
            </div>
            <div className="py-3 d-flex gap-4 justify-content-center align-items-center">
              {tv.genres?.map((genre) => (
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
                Episodes
              </button>
            </li>
            <li className="nav-item">
              <button className={isInfo === 1 ? `nav-link active bg-danger` : `nav-link text-light`} onClick={isInfo !== 1 ? () => toggleInfoState(1) : null}>
                Info
              </button>
            </li>
            <li className="nav-item">
              <button className={isInfo === 2 ? `nav-link active bg-danger` : `nav-link text-light`} onClick={isInfo !== 2 ? () => toggleInfoState(2) : null}>
                Cast
              </button>
            </li>
            <li className="nav-item">
              <button className={isInfo === 3 ? `nav-link active bg-danger` : `nav-link text-light`} onClick={isInfo !== 3 ? () => toggleInfoState(3) : null}>
                Trailer
              </button>
            </li>
          </ul>
        </div>
        {isInfo === 0 ? <Episodes seasons={tv.seasons} /> : isInfo === 1 ? <Info tv={tv} /> : isInfo === 2 ? <Casts tv={tv} casts={casts} /> : isInfo === 3 ? <Videos videos={videos} /> : null}
      </div>
    </>
  );
};

export default TvPage;
