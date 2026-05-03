"use client";

import { useAuth } from "../../contexts/authContext";
import AuthForms from "../auth/AuthForms";
import Link from "next/link";

export default function MainLayout({ children }) {
  const { user, logout } = useAuth();

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          borderBottom: "1px solid #333",
        }}
      >
        {/* Logo / Title */}
        <h2>TikTok Clone</h2>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link href="/">Home</Link>
          <Link href="/following">Following</Link>
          <Link href="/explore-users">Explore</Link>
          <Link href="/upload">Upload</Link>
        </div>

        {/* Auth Section */}
        <div>
          {user ? (
            <div style={{ display: "flex", gap: "10px" }}>
              <span>{user.username}</span>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <AuthForms />
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}