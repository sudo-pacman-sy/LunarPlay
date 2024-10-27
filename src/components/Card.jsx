import { useEffect, useState } from "react";
import { Skeleton, Backdrop, CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fetchMovies from "../api/Movies";
import { useNavigate } from "react-router-dom";
import starImage from "/assets/star.png";

function Card({ api }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 900, min: 700 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 420 },
      items: 3,
      slidesToSlide: 2,
    },
    smallmobile: {
      breakpoint: { max: 420, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  useEffect(() => {
    async function respond() {
      try {
        const moviedata = await fetchMovies(api);
        if (moviedata && moviedata.length > 0) {
          const filteredMovies = moviedata.filter(
            (movie) => movie.posterPath && movie.posterPath !== ""
          );
          setMovies(filteredMovies);
        } else {
          console.error("No movie data available.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    respond();
  }, [api]);

  const handleClick = async (id) => {
    setBackdropOpen(true);
    await fetchMovies(id);
    navigate(`/movie/${id}`);
    setBackdropOpen(false);
  };

  if (loading) {
    return (
      <div className="mx-5 my-4 flex gap-[20px] overflow-hidden w-full">
        {[...Array(6)].map((_, i) => (
          <Skeleton
            key={i}
            sx={{ bgcolor: "grey.500" }}
            variant="rounded"
            width={350}
            height={362}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="lg:pl-4 ml-2">
        <Carousel
          responsive={responsive}
          infinite={true}
          minimumTouchDrag={20}
          itemClass="lg:-mr-6 mx-10 lg:pl-2 -ml-2"
        >
          {movies.map((movie, index) => (
            <div
              className="bg-[#E6F5FF] p-3 w-[170px] lg:h-[365px] lg:w-[217px] rounded-[5px] hover:scale-[1.05] cursor-pointer transition duration-200 ease-in-out border-2 border-sky-400 my-3 select-none"
              key={index}
              onClick={() => {
                handleClick(movie.id);
              }}
            >
              <img
                className="w-36 lg:w-48 rounded-xl pointer-events-none"
                src={`https://image.tmdb.org/t/p/w780${movie.posterPath}`}
                alt=""
              />
              <h3 className="pt-1 text-lg truncate">{movie.title}</h3>
              <div className="flex justify-between">
                <p className="text-sm text-blue-700">{movie.date}</p>
                <p className="flex text-sm gap-0.4">
                  <img src={starImage} className="size-4 mt-0.5 mr-[2px]" />
                  {movie.voteAverage.toFixed(1)}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

Card.propTypes = {
  api: PropTypes.array.isRequired,
};

export default Card;
