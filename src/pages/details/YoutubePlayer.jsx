import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

const YouTubePlayer = (props) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPlayerSize = () => {
    if (windowWidth < 640) return { width: 400, height: 230 };
    if (windowWidth < 1024) return { width: 400, height: 270 };
    return { width: 670, height: 380 };
  };

  const opts = {
    height: getPlayerSize().height,
    width: getPlayerSize().width,
    playerVars: {
      autoplay: 0,
    },
  };

  const videoId = props.videoIds[currentVideoIndex];

  const onError = (event) => {
    console.error("YouTube Player Error:", event.data);

    if (currentVideoIndex < props.videoIds.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      console.error("All videos have failed to load.");
      setCurrentVideoIndex(0);
    }
  };

  return (
    <div className="flex justify-center my-4 lg:w-full w-screen">
      <div className="rounded-xl overflow-hidden shadow-lg ">
        {videoId ? (
          <YouTube videoId={videoId} opts={opts} onError={onError} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-red-600">
              Unable to load video. Please try again later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubePlayer;
