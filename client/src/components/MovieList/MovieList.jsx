import styled from "styled-components";

const MovieList = ({ colVal, api }) => {
  return (
    <>
      {colVal ? (
        <div className="row mt-2">
          {api?.map((movie) => (
            <Link href="" className={`link-offset-2 link-underline link-underline-opacity-0 col-xl-${colVal} col-md-${colVal} col-6 text-center mt-3 mb-3 mb-xl-4 mb-xxl-5`} key={movie.id}>
              <Image className="my-3 rounded-4 img-fluid" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} />
              <p className="fs-5">{movie.title}</p>
              <ReleaseDate>{movie.release_date}</ReleaseDate>
            </Link>
          ))}
        </div>
      ) : (
        <div className="row mt-2">
          {api?.map((movie) => (
            <Link href="" className="link-offset-2 link-underline link-underline-opacity-0 col-xl-2 col-md-4 col-6 text-center mt-3 mb-3 mb-xl-4 mb-xxl-5" key={movie.id}>
              <Image className="my-3 rounded-4 img-fluid" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} />
              <p className="fs-5">{movie.title}</p>
              <ReleaseDate>{movie.release_date}</ReleaseDate>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

const Link = styled.a`
  transition: transform 0.3s;
  color: #eee;

  &:hover {
    transform: scale(1.1);
    color: #ffc639;
  }
`;

const Image = styled.img`
  transition: transform 0.3s;
`;

const ReleaseDate = styled.p`
  color: rgba(255, 255, 255, 0.5);
`;

export default MovieList;
