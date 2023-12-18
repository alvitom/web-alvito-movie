const Info = ({tv}) => {
  return (
    <div className="row justify-content-center align-items-center mt-md-4 mt-3 mx-md-0 mx-3">
      <div className="col-md-10 text-center">
        <h3 className="text-light">Sinopsis</h3>
        <p className="fs-5 mt-4">{tv.overview}</p>
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-md-10">
            <table className="table table-dark fs-5">
              <tr className="border-bottom border-secondary">
                <th className="p-4">Original Title</th>
                <td className="p-4">{tv.original_name}</td>
              </tr>
              {/* <tr>
                  <th>Original Title</th>
                  <td>{tv.original_name}</td>
                </tr> */}
              <tr className="border-bottom border-secondary">
                <th className="p-4">First Air Date</th>
                <td className="p-4">{tv.first_air_date}</td>
              </tr>
              <tr className="border-bottom border-secondary">
                <th className="p-4">Last Air Date</th>
                <td className="p-4">{tv.last_air_date}</td>
              </tr>
              <tr className="border-bottom border-secondary">
                <th className="p-4">Seasons</th>
                <td className="p-4">{tv.number_of_seasons}</td>
              </tr>
              <tr className="border-bottom border-secondary">
                <th className="p-4">Episodes</th>
                <td className="p-4">{tv.number_of_episodes}</td>
              </tr>
              {/* <tr>
                  <th className="p-4">Average Duration</th>
                  <td>{tv.original_name}</td>
                </tr> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
