import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchMovieDetails from "./moviedetail";
import InfoPoster from "./infoposter";
import InfoCard from "./infocard";

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (!movie) {
    return <div className="text-white">No movie found!</div>;
  }

  return (
    <>
      <div>
        <div className="">
          <InfoPoster
            backdrop={movie.data.backdrop_path}
            title={movie.data.title}
          />
          <InfoCard movie={movie.data} pg={movie.pg_rating} />
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
