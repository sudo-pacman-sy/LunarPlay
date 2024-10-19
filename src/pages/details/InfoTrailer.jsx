import { Trailer } from "../../components/Headings";
import YouTubePlayer from "./YoutubePlayer";

function InfoTrailer(props) {
  return (
    <>
      <Trailer />
      <YouTubePlayer videoIds={props.videokey} />
    </>
  );
}

export default InfoTrailer;
