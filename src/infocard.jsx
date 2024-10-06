import PropTypes from "prop-types";

function InfoCard(props) {
  const genres = props.movie.genres.map((genre, index) => (
    <span key={index} className="mr-2">
      {genre.name}
      {(index < props.movie.genres.length - 1 && ",") || "."}
    </span>
  ));

  return (
    <>
      <div className="relative top-[470px] max-w-[1322px] h-screen">
        <div className="sticky top-4 left-[68px] h-[340px] min-w-[228px] z-10 float-left">
          <img
            src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
            alt=""
            className="w-full h-[350px] rounded-xl border-[2.5px] border-sky-600 "
          />
        </div>
        <div className="relative left-[350px] w-[1.4px] h-full bg-gray-500 mt-2 z-10"></div>
      </div>
      <div className="absolute top-[590px] bg-[#111111] h-full w-[1322px] overflow-hidden text-rose-600">
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
        </div>
      </div>
    </>
  );
}

export default InfoCard;

InfoCard.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
