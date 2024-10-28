import PropTypes from "prop-types";
import InfoDetail from "./InfoDetail";
import InfoTrailer from "./InfoTrailer";
import InfoCast from "./InfoCast";

function InfoCard(props) {
  return (
    <>
      <div
        id="movie info"
        className="relative lg:flex lg:overflow-visible overflow-hidden"
      >
        <div className="lg:sticky lg:top-5 lg:left-[68px] lg:h-[400px] lg:w-[233px] lg:float-left flex justify-center ">
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
              alt=""
              className="min-w-[233px] h-[350px] rounded-xl "
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
        </div>
        <div className="lg:min-h-screen lg:ml-28 lg:w-[2px] bg-gray-500"></div>
        <div className="pl-1 lg:ml-6 h-full w-[900px] text-red-500 mt-[50px]">
          <InfoDetail
            movie={props.movie}
            streamProvider={props.streamProvider}
            pg={props.pg}
          />
          <InfoTrailer movie={props.movie} videokey={props.videoKey} />
          <hr className="w-full lg:w-full border-gray-500 my-4 mt-8" />
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
