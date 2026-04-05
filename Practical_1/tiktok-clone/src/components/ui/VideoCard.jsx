<<<<<<< HEAD
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

=======
import Image from "next/image";

export default function VideoCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">

      <h2 className="text-lg font-semibold">Sample Video</h2>

      <Image
        src="/video1.jpg"
        alt="video"
        width={400}
        height={500}
        className="rounded-lg"
      />

      <p className="mt-2 text-gray-600">
        Sample TikTok video description
      </p>

    </div>
>>>>>>> 6d5ee3a (Initial commit with Practical_1 and UNIT_2)
  );
}