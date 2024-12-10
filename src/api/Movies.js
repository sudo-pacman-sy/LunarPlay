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
    let remainingRetries = 3;
    let validResponses = [];

    while (remainingRetries > 0) {
      const responses = await Promise.all(
        Object.values(apiUrls).map((url) =>
          axios
            .get(url, options)
            .then((response) => response?.data?.results || [])
            .catch((error) => {
              console.warn(`Error fetching from ${url}:`, error.message);
              return [];
            })
        )
      );

      const moviesFromResponses = responses.flatMap((movies) =>
        movies.map((movie) => ({
          title: movie.title,
          date: movie.release_date?.slice(0, 4) || "Unknown",
          overview: movie.overview || "No overview",
          voteAverage: movie.vote_average || 0,
          posterPath: movie.poster_path || "",
          backdropPath: movie.backdrop_path || "",
          id: movie.id || 0,
        }))
      );

      validResponses = validResponses.concat(moviesFromResponses);

      if (validResponses.length > 0) {
        break;
      }

      remainingRetries--;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    return validResponses;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    return [];
  }
}

export default fetchMovies;
