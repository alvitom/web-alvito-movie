import VideoPlayer from "../utils/VideoPlayer";

const Videos = ({ videos }) => {
  return (
    <>
      {videos.length > 1 ? (
        <div className="row justify-content-center align-items-center mt-md-5 mt-3 gap-1">
          <h3 className="text-light text-center">Video</h3>
          {videos.map((video) => {
            return video.type === "Trailer" && video.official ? <VideoPlayer youtubeId={video.key} key={video.id} /> : null;
          })}
        </div>
      ) : (
        <h3 className="text-light text-center mt-md-5 mt-3">Video Tidak Ditemukan!</h3>
      )}
    </>
  );
};

export default Videos;
