function Test(props) {
  return (
    <div className="relative h-[1322px]">
      <img
        src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
        alt=""
        className="sticky top-0 h-[340px] w-[288px]"
      />
    </div>
  );
}

export default Test;
