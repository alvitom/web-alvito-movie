const Casts = ({ tv, casts }) => {
  return (
    <>
      {tv.created_by.length > 0 ? (
        <div className="row mt-md-5 mt-3 mx-md-0 mx-3">
          <h3 className="text-light text-center">Creator</h3>
          {tv.created_by.map((creator) => {
            return creator.profile_path ? (
              <div className="col-12 d-flex gap-3 my-4 justify-content-sm-center align-items-center" key={creator.id}>
                <img src={`${process.env.REACT_APP_BASEIMGURL}/${creator.profile_path}`} alt={creator.name} className="rounded-3 img-fluid" style={{ width: 75 + "px" }} />
                <div className="d-flex flex-column">
                  <p className="text-light">{creator.name}</p>
                  <p>Creator</p>
                </div>
              </div>
            ) : null;
          })}
        </div>
      ) : (
        <h3 className="text-light text-center mt-md-5 mt-3">Creator Tidak Ditemukan!</h3>
      )}
      {casts.length > 0 ? (
        <div className="row mt-md-5 mt-3 mx-md-0 mx-3">
          <h3 className="text-light text-center">Cast</h3>
          {casts.map((cast) => {
            return cast.profile_path ? (
              <div className="col-md-4 col-xl-3 col-sm-6 d-flex gap-3 my-4 align-items-center" key={cast.id}>
                <img src={`${process.env.REACT_APP_BASEIMGURL}/${cast.profile_path}`} alt={cast.name} className="rounded-3 img-fluid" style={{ width: 75 + "px" }} />
                <div className="d-flex flex-column">
                  <p className="text-light">{cast.name}</p>
                  <p>{cast.character}</p>
                </div>
              </div>
            ) : null;
          })}
        </div>
      ) : (
        <h3 className="text-light text-center mt-md-5 mt-3">Cast Tidak Ditemukan!</h3>
      )}
    </>
  );
};

export default Casts;
