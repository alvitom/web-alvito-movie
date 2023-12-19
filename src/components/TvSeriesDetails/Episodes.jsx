import { useState } from "react";

const Episodes = ({ seasons }) => {
    const [isActive, setIsActive] = useState(11);

    const toggleActive = (tabIndex) => {
        if (tabIndex !== isActive) {
            setIsActive(tabIndex);
          }
    }
  return (
    <div className="mt-md-4 mt-3">
      <h3 className="text-light text-center">Seasons & Episodes</h3>
      <div className="accordion mt-4" id="accordionExample">
        {seasons
          ?.map((season) => {
            return season.name === "Specials" ? null : (
              <div className="accordion-item bg-dark text-light" key={season.id}>
                <h2 className="accordion-header">
                  <button className="accordion-button bg-dark text-light gap-3" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${season.id}`} aria-expanded="true" aria-controls={`collapse${season.id}`} onClick={isActive !== season.season_number ? () => toggleActive(season.season_number) : null}>
                    <h3 className={`p-2 ${isActive === season.season_number ? `bg-danger` : null}`}>{season.season_number}</h3>
                    <p>{season.name}</p>
                    <p className="text-white-50">{season.air_date}</p>
                  </button>
                </h2>
                {season.season_number === seasons.length - 1 || season.season_number === seasons.length ? (
                  <div id={`collapse${season.id}`} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body d-flex gap-3 my-4 align-items-center">
                      <img src={`${process.env.REACT_APP_BASEIMGURL}/${season.poster_path}`} alt={season.name} className="rounded-3" style={{ width: 200 + "px" }} />
                      <div className="d-flex flex-column">
                        <p className="fs-4">Total Episodes : {season.episode_count}</p>
                        <p>{season.overview}</p>
                        <p>
                          <i className="bi bi-star-fill"></i> {season.vote_average}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div id={`collapse${season.id}`} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body d-flex gap-3 my-4 align-items-center">
                      <img src={`${process.env.REACT_APP_BASEIMGURL}/${season.poster_path}`} alt={season.name} className="rounded-3" style={{ width: 200 + "px" }} />
                      <div className="d-flex flex-column">
                        <p className="fs-4">Total Episodes : {season.episode_count}</p>
                        <p>{season.overview}</p>
                        <p>
                          <i className="bi bi-star-fill"></i> {season.vote_average}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export default Episodes;
