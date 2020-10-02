import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./App.css";
import Video from "./components/Video";

function App() {
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {Videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              likes={parseInt(likes)}
              shares={shares}
              messages={messages}
              channel={channel}
              description={description}
              song={song}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
