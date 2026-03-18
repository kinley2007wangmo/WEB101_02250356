import React from "react";
import ProfileCard from "./components/ProfileCard";
import profileImg from "./assets/Profile.jpeg";
import "./App.css";

function App() {

  const profiles = [
    {
      id: 1,
      name: "Kinley Wangmo",
      role: "Software Engineering Student",
      avatar: profileImg,
      skills: ["React", "JavaScript", "CSS", "HTML"]
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>My Profile</h1>
      </header>

      <div className="profiles-container">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            avatar={profile.avatar}
            skills={profile.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
