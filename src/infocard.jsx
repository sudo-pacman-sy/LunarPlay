import PropTypes from "prop-types";

function InfoCard(props) {
  const genres = props.movie.genres.map((genre, index) => (
    <span key={index} className="mr-2">
      {genre.name}
      {(index < props.movie.genres.length - 1 && ",") || "."}
    </span>
  ));
  const stream = props.streamProvider.map((stream1, index) => (
    <span key={index} className="mr-2">
      {stream1}
      {index < props.streamProvider.length - 1 ? "," : "."}
    </span>
  ));
  const cast = props.casts.map((castMember, index) => (
    <div key={index} className="flex items-center space-x-4 mb-4 h-full w-full">
      <img
        src={`https://image.tmdb.org/t/p/w200${castMember.profilePath}`}
        alt={castMember.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <p className="font-bold text-lg">{castMember.name}</p>
        <p className="text-sm text-gray-500">as {castMember.character}</p>
      </div>
    </div>
  ));
  const similarMovies = props.similarMovie.map((movie, index) => (
    <div key={index} className="flex h-full w-full items-center mb-4">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="rounded"
      />
      <p className="font-bold text-lg ml-4">{movie.title}</p>
    </div>
  ));

  return (
    <>
      <div className="relative top-[470px] max-w-[1322px] min-h-screen">
        <div className="sticky top-4 left-[68px] h-[340px] min-w-[228px] z-10 float-left">
          <img
            src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
            alt=""
            className="w-full h-[350px] rounded-xl border-[2.5px] border-sky-600 "
          />
        </div>
        <div className="relative left-[350px] w-[1.4px] h-full bg-gray-500 mt-2 z-10"></div>
      </div>
      <div className="absolute top-[590px] bg-[#111111] h-full w-[1322px] text-rose-600">
        <div className="relative left-[364px] h-full w-[900px]">
          <div className="text-5xl ">
            <h1>{props.movie.title}</h1>
          </div>
          <div className="">
            <h2>{props.movie.tagline}</h2>
          </div>
          <div className="">
            <p>Overview : {props.movie.overview}</p>
          </div>
          <div>
            <p>Genres : {genres}</p>
          </div>
          <div className="">
            <p>Release Date : {props.movie.release_date}</p>
          </div>
          <div className="">
            <p>Runtime : {props.movie.runtime} mins</p>
          </div>
          <div className="">
            <p>Rating : {props.movie.vote_average}*</p>
          </div>
          <div className="">
            <p>PG Rating : {props.pg}</p>
          </div>
          <div className="">
            <p>
              Buy/Rent : {""}
              {stream != "" ? stream : " Movie not available in your location"}
            </p>
          </div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${props.videoKey}?controls=0&rel=1`}
            title={`${props.movie.title} Trailer`}
            allowFullScreen
            className="rounded-lg border-2 border-sky-600"
          />
          <div>Casts : {cast}</div>
          <div>{similarMovies}</div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;

InfoCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
