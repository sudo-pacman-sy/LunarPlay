import { Trailer } from "../../components/Headings";
import YoutubePlayer from "./YoutubePlayer";
function InfoTrailer(props) {
  return (
    <>
      <Trailer />
      <YoutubePlayer videoIds={props.videokey} />
    </>
  );
}

export default InfoTrailer;
