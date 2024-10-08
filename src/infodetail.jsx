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

  return (
    <div>
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
        <p>Genre : {genres}</p>
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
      <div>Buy/Rent : {stream}</div>
    </div>
  );
}

export default InfoDetail;
