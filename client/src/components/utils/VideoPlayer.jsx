import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  return (
    <>
      <div className="col-md-6 col-xl-7 my-4">
        <Youtube videoId={youtubeId} onReady={(e) => e.target.pauseVideo()} />
      </div>
    </>
  );
};

export default VideoPlayer;
