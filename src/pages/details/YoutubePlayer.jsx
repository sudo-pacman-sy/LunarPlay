import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const YoutubePlayer = (props) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resizing to make the player responsive
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine responsive video player size
  const getPlayerSize = () => {
    if (windowWidth < 640) return { width: 400, height: 230 };
    if (windowWidth < 1024) return { width: 400, height: 270 };
    return { width: 670, height: 380 };
  };

  const playerSize = getPlayerSize();

  const videoId = props.videoIds[currentVideoIndex];
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}?showinfo=0&enablejsapi=1&origin=http://localhost:3000/movie/'`;

  // Handle errors and attempt to switch to the next video in case of failure
  const onError = (error) => {
    console.error("Error loading video:", error);

    if (currentVideoIndex < props.videoIds.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      console.error("All videos have failed to load.");
      setCurrentVideoIndex(0);
    }
  };

  return (
    <div className="flex justify-center my-4 lg:w-full w-screen">
      <div className="rounded-xl overflow-hidden shadow-lg">
        {videoUrl ? (
          <ReactPlayer
            url={videoUrl}
            playing={false}
            controls={true}
            width={playerSize.width}
            height={playerSize.height}
            onError={onError}
          />
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

export default YoutubePlayer;
