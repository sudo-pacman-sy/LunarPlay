import React, { useState } from "react";
import YouTube from "react-youtube";

const YouTubePlayer = (props) => {
  const [hasError, setHasError] = useState(false);

  const opts = {
    height: "380",
    width: "670",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    console.log("Player is ready");
  };

  const onError = (event) => {
    console.error("YouTube Player Error: ", event.data);
    setHasError(true);
  };

  // Select video ID based on error state
  const videoId = hasError ? props.videoIds[1] : props.videoIds[0];

  return (
    <div className="flex justify-center my-4">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onReady}
          onError={onError}
        />
      </div>
    </div>
  );
};

export default YouTubePlayer;
