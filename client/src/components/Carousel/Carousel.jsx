import { useEffect, useState } from "react";
import styled from "styled-components";

const Slideshow = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  // };

  // const prevSlide = () => {
  //   // Berganti ke gambar sebelumnya
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  // };

  const indexState = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContainer className="border-bottom border-secondary pb-5">
      <Carousel className="row mt-5 justify-content-center">
        {movies.map((movie, index) => {
          return index === currentIndex ? (
            <Link href={`/movie/${movie.id}`} className={`link-offset-2 link-underline link-underline-opacity-0 text-center mb-4 w-50`} key={movie.id}>
              <Image src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} className="rounded-4 img-fluid" />
              <h1 className="my-3">{movie.title}</h1>
            </Link>
          ) : null;
        })}
      </Carousel>
      {/* <div className="carousel-btn d-flex justify-content-between">
        <PrevBtn className="prev-btn" onClick={prevSlide}>
          Prev
        </PrevBtn>
        <NextBtn className="next-btn" onClick={nextSlide}>
          Next
        </NextBtn>
      </div> */}
      <div className="d-flex justify-content-center gap-3 gap-md-4">
        {movies.map((movie, index) => {
          return index === currentIndex ? <SlideBtn className="border rounded" key={movie.id}></SlideBtn> : <SlideBtn className="border rounded bg-transparent" onClick={currentIndex !== index ? () => indexState(index) : null} key={movie.id}></SlideBtn>;
        })}
      </div>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  margin: 50px auto;
`;

const Carousel = styled.div`
  display: flex;
  overflow: hidden;
`;

const Link = styled.a`
  transition: transform 0.3s;
  color: #eee;

  &:hover {
    color: #ffc639;
  }
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  transition: opacity 0.5s ease-in-out;

  @media screen and (min-width: 576px) {
    width: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1200px) {
    width: 350px;
  }
`;

// const PrevBtn = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   font-size: 1.2em;
//   padding: 10px;
//   cursor: pointer;
//   background-color: #333;
//   color: white;
//   border: none;
//   left: 10px;
// `;

// const NextBtn = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   font-size: 1.2em;
//   padding: 10px;
//   cursor: pointer;
//   background-color: #333;
//   color: white;
//   border: none;
//   right: 10px;
// `;

const SlideBtn = styled.button`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 576px) {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 1200px) {
    width: 20px;
    height: 20px;
  }
`;

export default Slideshow;
