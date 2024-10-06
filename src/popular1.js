import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNmZjVjYzZmOTNiNDMyM2NkYTA5MjQ4ZDY4NmEzMiIsIm5iZiI6MTcyNzIxMTAwMi40MDE5MzcsInN1YiI6IjY2ZWE1YTdmYjI5MTdlYjE4MDBiNDNjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XvARcWgeDRaQPgPynSYoycKokoalaHO3qI5GbNl82l4",
  },
};

async function fetchMovies(apiUrls = []) {
  try {
    // Create an array of API requests
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
      }))
    );

    return allMovies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export default fetchMovies;
