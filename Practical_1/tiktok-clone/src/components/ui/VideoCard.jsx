"use client";

import { useState } from "react";

export default function VideoCard() {

  const [likes, setLikes] = useState(0)
  const [comments, setComments] = useState(0)
  const [shares, setShares] = useState(0)

  return (

    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "500px",
      margin: "20px auto"
    }}>

      {/* PROFILE IMAGE */}
      <img
        src="/Profile.jpg"
        alt="profile"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%"
        }}
      />

      <h3>@username</h3>

      {/* VIDEO */}
      <video
        controls
        style={{
          width: "100%",
          marginTop: "10px",
          borderRadius: "10px"
        }}
      >
        <source src="/Video1.mp4" type="video/mp4" />
      </video>

      {/* BUTTONS */}
      <div style={{
        display: "flex",
        gap: "20px",
        fontSize: "20px",
        marginTop: "10px"
      }}>

        <button onClick={() => setLikes(likes + 1)}>
          ❤️ {likes}
        </button>

        <button onClick={() => setComments(comments + 1)}>
          💬 {comments}
        </button>

        <button onClick={() => setShares(shares + 1)}>
          🔗 {shares}
        </button>

      </div>

    </div>

  );
}