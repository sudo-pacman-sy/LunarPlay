import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fetchMovies from "../../api/Movies";

function MainPoster({ api }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
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
      } finally {
        setLoading(false);
      }
    }
    respond();
  }, [api]);

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  if (loading) {
    return (
      <div className="p-4">
        <Skeleton
          animation="wave"
          sx={{ bgcolor: "grey.1000" }}
          variant="rounded"
          width={1280}
          height={470}
        />
      </div>
    );
  }

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
          <div key={index}>
            <div className="relative">
              <img
                className="size-full max-h-[500px] object-contain object-fill relative pointer-events-none brightness-95 rounded-xl"
                src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
                alt=""
              />
              <div className="absolute top-0 left-0 bg-gradient-to-r from-stone-950 from-10% via-stone-900 via-30%  min-w-[200px] lg:min-w-[500px] min-h-full lg:min-h-[32rem] opacity-85">
                <div className="select-none">
                  <div className="max-w-[210px] lg:max-w-[500px] line-clamp-2">
                    {/*Poster Title Div*/}
                    <p className="pt-8 pl-2 lg:pt-20 lg:pl-5 font-cinzel text-[25px] lg:text-[70px] break-words leading-tight text-slate-50">
                      {movie.title}
                    </p>
                  </div>
                  <div className="max-w-[170px] lg:max-w-[470px] max-h-[450px] line-clamp-4">
                    {/*Poster Title Info Div*/}
                    <p className="pl-2 lg:pl-5 left-5 font-palanquin text-xs lg:text-xl text-slate-50">
                      {movie.overview}
                    </p>
                  </div>

                  <div
                    id="button"
                    onClick={() => {
                      handleClick(movie.id);
                    }}
                    className="absolute bottom-10 left-2 lg:bottom-16 lg:left-6 h-8 w-28 lg:h-12 lg:w-36 border-2 text-red-600 rounded-xl cursor-pointer "
                  >
                    <div className="absolute top-0 left-0 bg-white/15 pb-2.5 rounded-xl h-full w-full"></div>
                    <p className="py-1.5 flex  justify-center lg:pt-2.5 lg:justify-center lg:pb-2.5 h-full backdrop-blur-md text-xs lg:text-base rounded-xl font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 pr-0.5 lg:size-6 lg:pr-1 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                        />
                      </svg>
                      More Info
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-[#111111] w-full lg:h-14 h-10"></div>
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
