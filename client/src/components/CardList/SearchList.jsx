import styled from "styled-components";

const SearchList = ({ datas }) => {
  return (
    <>
      <div className="row mt-2">
        {datas?.map((data) => {
          return data.poster_path ? (
            <Link href={`/${data.media_type}/${data.id}`} className={`link-offset-2 link-underline link-underline-opacity-0 col-md-3 col-6 text-center mt-3 mb-3 mb-xl-4 mb-xxl-5`} key={data.id}>
              <Image className="my-3 rounded-4 img-fluid" src={`${process.env.REACT_APP_BASEIMGURL}/${data.poster_path}`} alt={data.title || data.name} />
              <p className="fs-5">{data.title || data.name}</p>
              <ReleaseDate>{data.release_date || data.first_air_date}</ReleaseDate>
            </Link>
          ) : null;
        })}
      </div>
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

export default SearchList;
