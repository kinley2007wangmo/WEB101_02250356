"use client";
import { useEffect, useState } from "react";
import { getVideos, likeVideo } from "../../services/videoService";

export default function VideoFeed() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then(setVideos);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {videos.map((video) => (
        <div key={video._id} style={{ marginBottom: 30 }}>
          <video
            src={video.url}
            controls
            autoPlay
            loop
            width="300"
          />

          <p><b>{video.user?.username}</b></p>
          <p>{video.caption}</p>

          <button onClick={() => likeVideo(video._id)}>❤️ Like</button>
        </div>
      ))}
    </div>
  );
}