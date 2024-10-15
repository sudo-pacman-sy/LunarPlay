import Card from "./Card";
import { Trending, Action, Thriller, Comedy, TopRated } from "./Headings";
import MainPoster from "./mainPoster";
import Navbar from "./navbar";
import Footer from "./Footer";

const random = Math.floor(Math.random(20) * 10 + 1);

const trendingtoday = [
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
];

const popularMovieUrls = [
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
];

const actionMovies = [
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${random}&sort_by=vote_count.desc&with_genres=28`,
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${random}&sort_by=vote_count.desc&with_genres=28`,
];

const thrillerMovies = [
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${random}&sort_by=vote_count.desc&with_genres=53`,
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${random}&sort_by=vote_count.desc&with_genres=53`,
];

const comedyMovies = [
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${random}&sort_by=popularity.desc&with_genres=35&vote_count.gte=1000`,
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${random}&sort_by=popularity.desc&with_genres=35&vote_count.gte=1000`,
];

const topRatedMovies = [
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${random}&sort_by=vote_count.desc&vote_average.gte=7.5&vote_average.lte=10&vote_count.gte=1000`,
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${random}&sort_by=vote_count.desc&vote_average.gte=7.5&vote_average.lte=10&vote_count.gte=1000`,
];

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#111111] h-full">
        <MainPoster api={trendingtoday} />
        <Trending />
        <Card api={popularMovieUrls} />
        <Action />
        <Card api={actionMovies} />
        <Thriller />
        <Card api={thrillerMovies} />
        <Comedy />
        <Card api={comedyMovies} />
        <TopRated />
        <Card api={topRatedMovies} />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
