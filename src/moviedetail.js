import axios from "axios";

const fetchMovieDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const PGurl1 = `https://api.themoviedb.org/3/movie/${id}/release_dates`;
  const stProvide = `https://api.themoviedb.org/3/movie/${id}/watch/providers`;
  const trailerurl = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const casturl = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const similarurl = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNmZjVjYzZmOTNiNDMyM2NkYTA5MjQ4ZDY4NmEzMiIsIm5iZiI6MTcyNzIxMTAwMi40MDE5MzcsInN1YiI6IjY2ZWE1YTdmYjI5MTdlYjE4MDBiNDNjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XvARcWgeDRaQPgPynSYoycKokoalaHO3qI5GbNl82l4",
    },
  };

  try {
    // Api Calls
    const response1 = await axios.get(url, options);
    const PGresponse = await axios.get(PGurl1, options);
    const streamResponse = await axios.get(stProvide, options);
    const trailerdata = await axios.get(trailerurl, options);
    const castdata = await axios.get(casturl, options);
    const similardata = await axios.get(similarurl, options);
    const videosresult = trailerdata.data.results;
    const youtubeVideo = videosresult.findLast(
      (video) => video.site == "YouTube" && video.type == "Trailer"
    );
    const videoKey = youtubeVideo.key;
    const castResult = castdata.data.cast;
    const casts = castResult.slice(0, 10).map((cast) => {
      return {
        name: cast.name,
        character: cast.character,
        profilePath: cast.profile_path,
      };
    });
    const similars = similardata.data.results;
    let allProviders = [];

    // Extract specific provider details (Buy, Rent, Flatrate)
    if (
      !streamResponse ||
      !streamResponse.data ||
      !streamResponse.data.results ||
      !streamResponse.data.results.IN
    ) {
      return [];
    } else if (
      streamResponse.data.results.IN.buy ||
      streamResponse.data.results.IN.rent ||
      streamResponse.data.results.IN.flatrate
    ) {
      const sp = streamResponse.data.results.IN.buy
        ? streamResponse.data.results.IN.buy.map((pro) => {
            return pro.provider_name;
          })
        : [];

      const spr = streamResponse.data.results.IN.rent
        ? streamResponse.data.results.IN.rent.map((pro) => {
            return pro.provider_name;
          })
        : [];

      const spf = streamResponse.data.results.IN.flatrate
        ? streamResponse.data.results.IN.flatrate.map((pro) => {
            return pro.provider_name;
          })
        : [];
      const allProvider = sp.concat(spr).concat(spf);
      allProviders = [
        ...new Set(allProvider.filter((provider) => provider !== undefined)),
      ];
    }

    // Get the PG rating for US release dates
    const pgrate = PGresponse.data.results.filter((resp) => {
      return resp.iso_3166_1 == "US";
    })[0];
    const pg_rating = pgrate.release_dates[0]
      ? pgrate.release_dates[pgrate.release_dates.length - 1].certification
      : "No rating available";

    // Return the movie details, pg rating and providers as an object
    return {
      data: response1.data,
      pg_rating,
      allProviders,
      videoKey,
      casts,
      similars,
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw new Error("Failed to fetch movie details");
  }
};

export default fetchMovieDetails;
