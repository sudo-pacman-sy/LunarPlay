import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import fetchMovieDetails from "../../api/MovieDetail";
import InfoPoster from "./InfoBackdrop";
import InfoCard from "./InfoCard";
import Card from "../../components/Card";
import { Similarmovies } from "../../components/Headings";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

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
    return (
      <>
        <div className="h-screen w-full">
          <Backdrop
            open={true}
            sx={{ backgroundColor: "#111111", color: "#fff" }}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <div className="absolute inset-0 text-white flex items-center justify-center mt-20 text-xl tracking-wide">
            Loading...
          </div>
        </div>
      </>
    );
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
      <div className="bg-[#111111]">
        <Navbar />
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
          director={movie.director}
        />
        <Similarmovies />
        <Card api={similarMovies} />
        <Footer />
      </div>
    </>
  );
}

export default MovieInfo;
