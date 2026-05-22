"use client";

import { useState, useEffect } from "react";
import AuthModal from "../components/auth/AuthModal";

export default function Home() {

  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const [likes, setLikes] = useState(120);
  const [shares, setShares] = useState(10);

  const [liked, setLiked] = useState(false);

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
    <div className="container">

      {/* Auth Modal */}
      {showModal && (
        <AuthModal
          onClose={() => setShowModal(false)}
          onLogin={setUser}
        />
      )}

      {/* Sidebar */}
      <div className="sidebar">
        <h1 className="logo">TikTok</h1>

        <ul className="menu">
          <li>🏠 For You</li>
          <li>👥 Following</li>
          <li>🔍 Explore</li>
          <li>➕ Upload</li>

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

        <div className="videoCard">

          <div className="profileSection">
            <div className="avatar"></div>

            <div>
              <h2>@kinley</h2>
              <p>My first TikTok clone 🔥</p>
            </div>
          </div>

          {/* Video */}
          <div className="videoArea">
            <video
              src="/videos/sample.mp4"
              controls
              autoPlay
              loop
              width="100%"
              height="100%"
            />
          </div>

          {/* Buttons */}
          <div className="actions">

            <button onClick={handleLike}>
              {liked ? "❤️" : "🤍"} {likes}
            </button>

            <div className="commentSection">

              <input
                type="text"
                placeholder="Write comment..."
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />

              <button onClick={handleComment}>
                💬 comments
              </button>
          
            </div>

            <div className="commentsList">
              {comments.map((comment, index) => (
                <p key={index}>
                  💬 {comment}
                </p>
              ))}

            </div>

            <button onClick={handleShare}>
              📤 {shares}
            </button>

          </div>

        </div>

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
        }

        .logo {
          color: #ff0050;
          font-size: 36px;
          margin-bottom: 40px;
        }

        .menu {
          list-style: none;
          padding: 0;
        }

        .menu li {
          padding: 15px 0;
          cursor: pointer;
          font-size: 20px;
        }

        .menu li:hover {
          color: #ff0050;
        }

        .feed {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .videoCard {
          width: 400px;
          background: #111;
          padding: 20px;
          border-radius: 20px;
        }

        .profileSection {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .avatar {
          width: 50px;
          height: 50px;
          background: #ff0050;
          border-radius: 50%;
        }

        .videoArea {
          border-radius: 20px;
          overflow: hidden;
        }

        .actions {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
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
          transform: scale(1.1);
          color: #ff0050;
        }
      `}</style>
    </div>
  );
}