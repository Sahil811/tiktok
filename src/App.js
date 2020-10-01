import React from "react";
import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url={
            "https://cdn.videvo.net/videvo_files/video/premium/video0122/small_watermarked/100a%20Factory_preview.webm"
          }
          likes={111}
          shares={222}
          messages={333}
          channel={"@sahil"}
          description={"mern stack tiktok clone"}
          song={"react is the king"}
        />
        <Video
          url={
            "https://cdn.videvo.net/videvo_files/video/premium/video0121/small_watermarked/25%20Alpen%20Gold%20day%204_preview.webm"
          }
          likes={111}
          shares={222}
          messages={333}
          channel={"@sahil"}
          description={"mern stack tiktok clone"}
          song={"react is the king"}
        />
      </div>
    </div>
  );
}

export default App;
