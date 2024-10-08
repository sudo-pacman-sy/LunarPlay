function InfoTrailer(props) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${props.videokey}?controls=0&rel=1`}
      title={`${props.title} Trailer`}
      allowFullScreen
      className="rounded-lg border-2 border-sky-600"
      onError={() =>
        console.log("Video cannot be displayed. It may be private.")
      }
    />
  );
}

export default InfoTrailer;
