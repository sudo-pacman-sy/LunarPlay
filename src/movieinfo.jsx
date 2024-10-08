import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchMovieDetails from "./moviedetail";
import InfoPoster from "./infoposter";
import InfoCard from "./infocard";
import Card from "./Card";
function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const random = Math.floor(Math.random(20) * 10 + 1);

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
    return <div className="bg-white">Loading Information...</div>;
  }

  if (!movie.data) {
    return (
      <div className="bg-white">Server Busy! Reload or Try again later</div>
    );
  }

  const genre = movie.data.genres[0].id;
  const similarMovies = [
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${random}&sort_by=popularity.desc&vote_count.gte=1000&with_genres=${genre}`,
  ];

  return (
    <>
      <div id="poster and info" className="">
        <InfoPoster
          backdrop={movie.data.backdrop_path}
          title={movie.data.title}
        />
        <InfoCard
          movie={movie.data}
          pg={movie.pg_rating}
          streamProvider={movie.allProviders}
          videoKey={movie.videoKey}
          casts={movie.casts}
          similarMovie={movie.similars}
        />
        <Card api={similarMovies} />
      </div>
    </>
  );
}

export default MovieInfo;
