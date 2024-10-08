import axios from "axios";

const fetchMovieDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const PGurl1 = `${url}/release_dates`;
  const stProvide = `${url}/watch/providers`;
  const trailerurl = `${url}/videos?language=en-US`;
  const casturl = `${url}/credits?language=en-US`;
  const similarurl = `${url}/similar?language=en-US&page=1`;
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
    const response = await axios.get(url, options);
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
      streamResponse.data.results &&
      Object.keys(streamResponse.data.results).length > 0
    ) {
      const providers = streamResponse.data.results.IN || {};
      const sp = providers.buy
        ? providers.buy.map((pro) => pro.provider_name)
        : [];
      const spr = providers.rent
        ? providers.rent.map((pro) => pro.provider_name)
        : [];
      const spf = providers.flatrate
        ? providers.flatrate.map((pro) => pro.provider_name)
        : [];

      const allProvider = [...sp, ...spr, ...spf];
      allProviders = [
        ...new Set(allProvider.filter((provider) => provider !== undefined)),
      ];
    } else {
      console.warn("No streaming providers available for this movie.");
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
      data: response.data,
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
