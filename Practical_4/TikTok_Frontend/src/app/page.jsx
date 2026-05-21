"use client";

import videos from "../data/videos";
import { useAuth } from "../contexts/authContext";
import { useState, useEffect } from "react";
import AuthModal from "../components/auth/AuthModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const { user, login, logout } = useAuth();

  return (
    <div className="container">

      {/* Login Modal */}
      {showModal && (
        <AuthModal
          onClose={() => setShowModal(false)}
          onLogin={login}
        />
      )}

      {/* Sidebar */}
      <div className="sidebar">
        <h1 className="logo">TikTok</h1>

        <ul className="menu">
          <li>
            <a href="/">🏠 For You</a>
          </li>

          <li>
            <a href="/following">
              👥 Following
            </a>
          </li>

          <li>
            <a href="/explore">
              🔍 Explore
            </a>
          </li>

          <li>
            <a href="/upload">
              ➕ Upload
            </a>
          </li>
          
          {user && (
            <li>
              <a href="/profile">
                👤 Profile
              </a>
            </li>
          )}

          {!user ? (
            <li onClick={() => setShowModal(true)}>
              🔐 Login
            </li>
          ) : (
            <>
              <li>👤 {user.username}</li>

              <li onClick={logout}>
                🚪 Logout
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Feed */}
      <div className="feed">

        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}

      </div>

      <style jsx>{`
        .container {
          display: flex;
          min-height: 100vh;
          background: black;
          color: white;
        }

        .sidebar {
          width: 250px;
          border-right: 1px solid #333;
          padding: 20px;
          position: fixed;
          height: 100vh;
          background: #000;
        }

        .logo {
          color: #ff0050;
          font-size: 40px;
          margin-bottom: 40px;
          font-weight: bold;
        }

        .menu {
          list-style: none;
          padding: 0;
        }

        .menu li {
          padding: 15px 0;
          cursor: pointer;
          font-size: 20px;
          transition: 0.3s;
        }

        .menu li:hover {
          color: #ff0050;
          transform: translateX(5px);
        }

        .feed {
          margin-left: 270px;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px;
          gap: 40px;
        }
      `}</style>
    </div>
  );
}

/* ===========================
   VIDEO CARD COMPONENT
=========================== */

function VideoCard({ video }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(video.likes);

  const [shares, setShares] = useState(video.shares);

  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const handleComment = () => {
    if (commentInput.trim() === "") return;

    setComments([...comments, commentInput]);

    setCommentInput("");
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  return (
    <div className="videoCard">

      {/* Profile */}
      <div className="profileSection">

        <img
          src={video.avatar}
          alt="avatar"
          className="avatar"
        />

        <div>
          <h2>@{video.username}</h2>
          <p>{video.caption}</p>
        </div>

      </div>

      {/* Video */}
      <div className="videoArea">

        <video
          src={video.video}
          controls
          autoPlay
          loop
          className="video"
        />

      </div>

      {/* Actions */}
      <div className="actions">

        <button onClick={handleLike}>
          {liked ? "❤️" : "🤍"} {likes}
        </button>

        <button onClick={handleShare}>
          📤 {shares}
        </button>

      </div>

      {/* Comment Box */}
      <div className="commentSection">

        <input
          type="text"
          placeholder="Write a comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />

        <button onClick={handleComment}>
          💬 Comment
        </button>

      </div>

      {/* Comments */}
      <div className="commentsList">

        {comments.map((comment, index) => (
          <p key={index}>
            💬 {comment}
          </p>
        ))}

      </div>

      <style jsx>{`
        .videoCard {
          width: 420px;
          background: #111;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 0 20px rgba(255, 0, 80, 0.2);
        }

        .profileSection {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .avatar {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          object-fit: cover;
        }

        .videoArea {
          overflow: hidden;
          border-radius: 15px;
        }

        .video {
          width: 100%;
          height: 550px;
          object-fit: cover;
          border-radius: 15px;
        }

        .actions {
          display: flex;
          justify-content: space-around;
          margin-top: 15px;
        }

        .actions button {
          background: none;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
          transition: 0.3s;
        }

        .actions button:hover {
          color: #ff0050;
          transform: scale(1.1);
        }

        .commentSection {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .commentSection input {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          border: none;
          outline: none;
        }

        .commentSection button {
          background: #ff0050;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 10px;
          cursor: pointer;
        }

        .commentsList {
          margin-top: 15px;
        }

        .commentsList p {
          background: #222;
          padding: 8px;
          border-radius: 10px;
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
}