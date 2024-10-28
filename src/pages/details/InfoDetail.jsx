import starImage from "/assets/rating.png";

function InfoDetail(props) {
  const genres = props.movie.genres
    .map((genre, index) =>
      index < props.movie.genres.length - 1
        ? genre.name + ", "
        : genre.name + "."
    )
    .join("");

  const stream =
    props.streamProvider.length > 0
      ? props.streamProvider
          .map((stream, index) =>
            index < props.streamProvider.length - 1
              ? stream + ", "
              : stream + "."
          )
          .join("")
      : "This movie is not available in your region.";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${String(date.getDate()).padStart(2, "0")}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${date.getFullYear()}`;
  };

  return (
    <div className="">
      <div className="text-6xl ml-1">
        <h1 className="w-screen lg:w-full font-bebas tracking-wide text-white">
          {props.movie.title}
        </h1>
      </div>
      <div className="-mt-1 pl-2">
        <h2 className="w-screen pr-2 lg:w-full text-xl uppercase">
          {props.movie.tagline}
        </h2>
      </div>
      <hr className="w-screen lg:w-full border-gray-500 my-2" />
      <div className="w-screen lg:max-w-[700px] text-gray-200 mt-2 pl-2 pr-5">
        <div className="">
          <p>{props.movie.overview}</p>
        </div>
        <div className="w-screen lg:w-full">
          <div className="my-1 flex pr-3">
            <p className="text-nowrap font-bold text-[#9ab] brightness-110">
              Genres :&nbsp;
            </p>
            <p>{genres}</p>
          </div>
          <div className="my-1 flex">
            <p className="font-bold text-[#9ab] brightness-110">
              Release Date&nbsp;:&nbsp;
            </p>
            <p>{formatDate(props.movie.release_date)}</p>
          </div>
          <div className="my-1 flex">
            <p className="font-bold text-[#9ab] brightness-110">
              Runtime&nbsp;:&nbsp;
            </p>
            <p>{props.movie.runtime} mins</p>
          </div>
          <div className="my-1 flex">
            <p className="font-bold text-[#9ab] brightness-110">
              Rating&nbsp;:&nbsp;
            </p>
            <img src={starImage} alt="star" className="w-5 h-5 mt-[2px]" />
            <p>{props.movie.vote_average.toFixed(2)}</p>
          </div>
          <div className="my-1 flex">
            <p className="font-bold text-[#9ab] brightness-110">
              PG Rating&nbsp;:&nbsp;
            </p>
            {props.pg ? <p>{props.pg}</p> : <p>No Rating available</p>}
          </div>
          <div className="my-1 flex pr-2">
            <p className="font-bold text-[#9ab] brightness-110">
              Buy/Rent&nbsp;:&nbsp;
            </p>
            <p>{stream}</p>
          </div>
        </div>
      </div>
      <hr className="w-screen lg:w-full border-gray-500 my-4" />
    </div>
  );
}

export default InfoDetail;
