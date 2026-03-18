import React, { useState } from "react";
import "./ProfileCard.css";

function ProfileCard({ name, role, avatar, skills }) {

  const [likes, setLikes] = useState(0);

  return (
    <div className="profile-card">
      <img src={avatar} alt={name} className="avatar" />

      <h2>{name}</h2>
      <p className="role">{role}</p>

      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>

      <button
        className="like-btn"
        onClick={() => setLikes(likes + 1)}
      >
        👍 Like ({likes})
      </button>
    </div>
  );
}

export default ProfileCard;
