import PropTypes from "prop-types";
import InfoDetail from "./infodetail";
import InfoTrailer from "./infoTrailer";
import InfoCast from "./infoCast";

function InfoCard(props) {
  return (
    <>
      <div
        id="movie info"
        className="relative max-w-[1322px] min-h-full flex bg-gradient-to-b from-[rgb(0,0,0,0)] from-[80px] to-[#111111] to-[80px]"
      >
        <div className="sticky top-5 left-[68px] h-[350px] min-w-[228px] float-left">
          <img
            src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
            alt=""
            className="w-full h-[350px] rounded-xl border-[2.5px] border-sky-600 "
          />
        </div>
        <div className="min-h-screen ml-28 top-64 w-[1.4px] bg-gray-500 z-50"></div>
        <div className="ml-6 h-full w-[900px] text-red-500 mt-[50px]">
          <InfoDetail
            movie={props.movie}
            streamProvider={props.streamProvider}
            pg={props.pg}
          />
          <InfoTrailer movie={props.movie} videokey={props.videoKey} />
          <InfoCast cast={props.casts} />
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
