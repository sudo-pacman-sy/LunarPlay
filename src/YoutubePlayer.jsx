import YouTube from "react-youtube";

const YouTubePlayer = (props) => {
  const opts = {
    height: "380",
    width: "670",
    playerVars: {
      autoplay: 0, // Prevent autoplay
    },
  };

  // Handle when the player is ready
  const onReady = () => {
    console.log("Player is ready");
  };

  // Handle video error
  const onError = () => {
    console.log("video Not available");
  };
  console.log(props.videoIds);

  return (
    <div className="flex justify-center my-4">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <YouTube
          videoId={onError ? props.videoIds[1] : props.videoIds[0]}
          opts={opts}
          onReady={onReady}
          onError={onError}
        />
      </div>
    </div>
  );
};

export default YouTubePlayer;
