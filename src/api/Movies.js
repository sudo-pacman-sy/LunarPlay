import axios from "axios";

const bearer_token = import.meta.env.VITE_TMDB_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: bearer_token,
  },
};

async function fetchMovies(apiUrls = []) {
  try {
    const responses = await Promise.all(
      apiUrls.map((url) => axios.get(url, options))
    );

    const allMovies = responses.flatMap((response) =>
      response.data.results.map((movie) => ({
        title: movie.title,
        date: movie.release_date.slice(0, 4),
        overview: movie.overview,
        voteAverage: movie.vote_average,
        posterPath: movie.poster_path,
        backdropPath: movie.backdrop_path,
        id: movie.id,
      }))
    );

    return allMovies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export default fetchMovies;
