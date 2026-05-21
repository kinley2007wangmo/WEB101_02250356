"use client";

import { useState } from "react";

export default function UploadPage() {

  const [videoPreview, setVideoPreview] = useState(null);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoPreview(videoURL);
    }
  };

  return (
    <div className="container">

      <h1 className="title">TikTok Upload</h1>

      <div className="uploadBox">

        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
        />

        {videoPreview && (
          <video
            src={videoPreview}
            controls
            className="videoPreview"
          />
        )}

      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: black;
          color: white;
          padding: 40px;
        }

        .title {
          font-size: 40px;
          color: #ff0050;
          margin-bottom: 30px;
        }

        .uploadBox {
          background: #111;
          padding: 30px;
          border-radius: 20px;
          width: 500px;
        }

        input {
          margin-bottom: 20px;
        }

        .videoPreview {
          width: 100%;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}