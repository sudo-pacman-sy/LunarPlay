import { Trailer } from "./Headings";
import YouTubePlayer from "./YoutubePlayer";

function InfoTrailer(props) {
  return (
    <>
      <Trailer />
      {/* <iframe
        width="790"
        height="415"
        src={`https://www.youtube.com/embed/${props.videokey}?rel=1`}
        title={`${props.title} Trailer`}
        allowFullScreen
        className="rounded-lg border-2 border-sky-600"
        onError={() =>
          console.log("Video cannot be displayed. It may be private.")
        }
      /> */}
      <YouTubePlayer videoIds={props.videokey} />
    </>
  );
}

export default InfoTrailer;