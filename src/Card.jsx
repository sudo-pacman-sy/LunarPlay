import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fetchMovies from "./movies";
import { useNavigate } from "react-router-dom";

function Card({ api }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 2,
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
    console.log("Clicked: ", id);
    navigate(`/movie/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pl-4">
      <Carousel
        responsive={responsive}
        infinite={true}
        minimumTouchDrag={80}
        itemClass="-mr-6 pl-2"
      >
        {movies.map((movie, index) => (
          <div
            className="bg-[#E6F5FF] p-3 min-h-[365px] max-h-[365px] min-w-[217px] max-w-[217px] rounded-[5px] hover:scale-[1.05] cursor-pointer transition duration-200 ease-in-out border-2 border-sky-400 my-3 select-none"
            key={index}
            onClick={() => {
              handleClick(movie.id);
            }}
          >
            <img
              className="min-w-48 max-w-48 rounded-xl pointer-events-none"
              src={`https://image.tmdb.org/t/p/w780${movie.posterPath}`}
              alt=""
            />
            <h3 className="pt-1 text-lg truncate">{movie.title}</h3>
            <div className="flex justify-between">
              <p className="text-sm text-blue-700">{movie.date}</p>
              <p className="flex text-sm gap-0.4">
                <img src="src/assets/rating.png" className="size-4 mt-0.5" />
                {movie.voteAverage.toFixed(1)}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

Card.propTypes = {
  api: PropTypes.array.isRequired,
};

export default Card;
