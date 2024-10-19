import PropTypes from "prop-types";
import InfoDetail from "./InfoDetail";
import InfoTrailer from "./InfoTrailer";
import InfoCast from "./InfoCast";

function InfoCard(props) {
  return (
    <>
      <div
        id="movie info"
        className="relative max-w-[1322px] min-h-full flex bg-gradient-to-b from-[rgb(0,0,0,0)] from-[80px] to-[#111111] to-[80px]"
      >
        <div className="sticky top-5 left-[68px] h-[400px] min-w-[228px] float-left">
          <img
            src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
            alt=""
            className="w-full h-[350px] rounded-xl "
          />
          <div className="">
            <div className="flex p-1 justify-center text-[#9ab]">
              <p>{props.movie.release_date.split("-")[0]} •</p>
              <p className="">Directed By&nbsp;</p>
            </div>
            <p className="flex justify-center -mt-[0.5px] text-[#9ab]">
              {props.director}
            </p>
          </div>
        </div>
        <div className="min-h-screen ml-28 top-64 w-[1.4px] bg-gray-500 z-50"></div>
        <div className="ml-6 h-full w-[900px] text-red-500 mt-[50px]">
          <InfoDetail
            movie={props.movie}
            streamProvider={props.streamProvider}
            pg={props.pg}
          />
          <InfoTrailer movie={props.movie} videokey={props.videoKey} />
          <hr className="border-gray-500 my-4 mt-8" />
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
