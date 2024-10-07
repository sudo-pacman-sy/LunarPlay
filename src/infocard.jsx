import PropTypes from "prop-types";
import InfoDetail from "./infodetail";

function InfoCard(props) {
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
      <div className="absolute top-[590px] bg-[#111111] min-h-screen w-[1322px] text-rose-600">
        <div className="relative left-[364px] h-full w-[900px]">
          <InfoDetail
            movie={props.movie}
            streamProvider={props.streamProvider}
            pg={props.pg}
          />

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
