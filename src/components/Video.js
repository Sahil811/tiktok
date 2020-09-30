import React, { useRef, useState } from "react";
import "./Video.css";
import VideoSideBar from "./VideoSideBar";
import VideoFooter from "./VideoFooter";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://ak.picdn.net/shutterstock/videos/1035625535/preview/stock-footage-akame-forty-eight-waterfalls-in-japan-wonderful-fresh-water-rapids-waterfalls-river-flowing.webm"
      ></video>

      <VideoFooter />
      <VideoSideBar />
    </div>
  );
};

export default Video;
