"use client";

import { useAuth } from "../../contexts/authContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "#ff0050",
          }}
        ></div>

        <div>
          <h1 style={{ fontSize: "36px" }}>
            {user?.username || "Guest"}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            <p><strong>120</strong> Followers</p>
            <p><strong>50</strong> Following</p>
            <p><strong>3</strong> Videos</p>
          </div>
        </div>
      </div>

      <h2>Your Videos</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <video
          src="/videos/sample.mp4"
          controls
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
}