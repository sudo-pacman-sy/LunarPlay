import axios from "axios";

const fetchMovieDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const PGurl1 = `https://api.themoviedb.org/3/movie/${id}/release_dates`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNmZjVjYzZmOTNiNDMyM2NkYTA5MjQ4ZDY4NmEzMiIsIm5iZiI6MTcyNzIxMTAwMi40MDE5MzcsInN1YiI6IjY2ZWE1YTdmYjI5MTdlYjE4MDBiNDNjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XvARcWgeDRaQPgPynSYoycKokoalaHO3qI5GbNl82l4",
    },
  };

  try {
    const response1 = await axios.get(url, options);
    const response2 = await axios.get(PGurl1, options);
    const resp2 = response2.data.results.filter((resp) => {
      return resp.iso_3166_1 == "US";
    })[0];
    const pg_rating = resp2.release_dates[0]
      ? resp2.release_dates[resp2.release_dates.length - 1].certification
      : "No rating available";
    return { data: response1.data, pg_rating };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw new Error("Failed to fetch movie details");
  }
};

export default fetchMovieDetails;
