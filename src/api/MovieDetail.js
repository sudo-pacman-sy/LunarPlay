import axios from "axios";

const bearer_token = import.meta.env.VITE_TMDB_KEY;

const fetchMovieDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits,similar,release_dates,watch/providers`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: bearer_token,
    },
  };

  try {
    // Single API Call with append_to_response
    const response = await axios.get(url, options);
    const movieData = response.data;

    // Extract videos (YouTube Trailers or Teasers)
    const videos = movieData.videos.results || [];
    const trailerVideos = videos
      .filter((video) => video.site === "YouTube" && video.type === "Trailer")
      .slice(0, 2);
    const teaserVideos = videos.filter(
      (video) => video.site === "YouTube" && video.type === "Teaser"
    );
    const youtubeVideo = trailerVideos.length ? trailerVideos : teaserVideos;
    const videoKey = youtubeVideo.map((video) => video.key);

    // Extract cast and director information
    const castResult = movieData.credits.cast || [];
    const crew = movieData.credits.crew || [];
    const directors = crew.filter((member) => member.job === "Director");
    const director = directors.length ? directors[0].name : "No director found";

    const casts = castResult.slice(0, 10).map((cast) => ({
      name: cast.name,
      character: cast.character,
      profilePath: cast.profile_path,
    }));

    // Extract similar movies
    const similars = movieData.similar.results || [];

    // Extract streaming providers (Buy, Rent, Flatrate)
    let allProviders = [];
    const providers = movieData["watch/providers"].results?.IN || {};
    const buy = providers.buy?.map((p) => p.provider_name) || [];
    const rent = providers.rent?.map((p) => p.provider_name) || [];
    const flatrate = providers.flatrate?.map((p) => p.provider_name) || [];
    allProviders = [...new Set([...buy, ...rent, ...flatrate])];

    // Get the PG rating from US release dates
    const releaseData = movieData.release_dates.results || [];
    const usRelease = releaseData.find((r) => r.iso_3166_1 === "US") || {};
    const pg_rating =
      usRelease.release_dates?.[0]?.certification || "No rating available";

    // Return the movie details and other extracted data
    return {
      data: movieData,
      pg_rating,
      allProviders,
      videoKey,
      casts,
      similars,
      director,
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw new Error("Failed to fetch movie details");
  }
};

export default fetchMovieDetails;
