import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fetchMovies from "./movies";

function MainPoster({ api }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  useEffect(() => {
    async function respond() {
      try {
        const moviedata = await fetchMovies(api);
        setMovies(moviedata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    respond();
  }, [api]);

  const handleClick = (id) => {
    console.log("Clicked: ", id);
    navigate(`/movie/${id}`);
  };

  return (
    <div className="cursor-grab">
      <Carousel
        responsive={responsive}
        infinite={true}
        minimumTouchDrag={80}
        arrows={false}
        customTransition="transform 600ms ease-in-out"
        autoPlay={true}
        autoPlaySpeed={6000}
      >
        {movies.map((movie, index) => (
          <div className="" key={index}>
            <div>
              <img
                className="size-full max-h-[500px] object-contain object-fill relative pointer-events-none brightness-95 rounded-xl"
                src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
                alt=""
              />
              <div className="absolute top-0 left-0 bg-gradient-to-r from-stone-950 from-10% via-stone-900 via-30% min-w-[500px] min-h-[32rem] opacity-85">
                <div className="min-w-[400px] min-h-[32rem] select-none">
                  <div className="max-w-[500px] max-h-[450px] line-clamp-2">
                    {/*Poster Title Div*/}
                    <p className="pt-20 pl-5 font-cinzel text-[70px] break-words leading-tight text-slate-50">
                      {movie.title}
                    </p>
                  </div>
                  <div className="max-w-[470px] max-h-[450px] line-clamp-4">
                    {/*Poster Title Info Div*/}
                    <p className="pl-5 left-5 font-palanquin text-xl text-slate-50">
                      {movie.overview}
                    </p>
                  </div>
                  <div
                    id="button"
                    onClick={() => {
                      handleClick(movie.id);
                    }}
                    className="absolute bottom-16 left-6 min-h-12 min-w-36 bg-transparent border-2 text-red-600 rounded-xl cursor-pointer"
                  >
                    <div className="absolute top-0 left-0 bg-white/15 pb-2.5 rounded-xl min-h-11 min-w-[140px]"></div>
                    <button className="pt-2.5 px-8 pb-2.5 backdrop-blur-md rounded-xl flex font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 pr-1 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                        />
                      </svg>
                      More Info
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 bg-gradient-to-t from-[#111111] min-w-full min-h-16"></div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

MainPoster.propTypes = {
  api: PropTypes.array.isRequired,
};

export default MainPoster;
