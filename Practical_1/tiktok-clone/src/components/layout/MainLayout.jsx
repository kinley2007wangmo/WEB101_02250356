<<<<<<< HEAD
"use client"

import Link from "next/link"
=======
"use client";

import Link from "next/link";
import { FaHome, FaCompass, FaUser, FaUpload, FaVideo } from "react-icons/fa";
>>>>>>> 6d5ee3a (Initial commit with Practical_1 and UNIT_2)

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
<<<<<<< HEAD
      <div className="w-60 bg-black text-white p-6 space-y-4">

        <h1 className="text-3xl font-bold text-pink-500">
          TikTok
        </h1>

        <nav className="flex flex-col space-y-3">

          <Link href="/">For You</Link>
          <Link href="/following">Following</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/live">Live</Link>
          <Link href="/upload">Upload</Link>
          <Link href="/profile">Profile</Link>

        </nav>

        <div className="pt-6 border-t border-gray-700">

          <Link href="/login" className="block">
            Login
          </Link>

          <Link href="/signup" className="block">
            Signup
=======
      <aside className="w-64 bg-black text-white p-6">

        {/* Logo */}
        <h1 className="text-3xl font-bold mb-10 text-center">
          TikTok
        </h1>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 text-lg">

          <Link href="/" className="flex items-center gap-3 hover:text-gray-300">
            <FaHome /> Home
          </Link>

          <Link href="/following" className="flex items-center gap-3 hover:text-gray-300">
            <FaUser /> Following
          </Link>

          <Link href="/explore" className="flex items-center gap-3 hover:text-gray-300">
            <FaCompass /> Explore
          </Link>

          <Link href="/live" className="flex items-center gap-3 hover:text-gray-300">
            <FaVideo /> Live
          </Link>

          <Link href="/upload" className="flex items-center gap-3 hover:text-gray-300">
            <FaUpload /> Upload
          </Link>

          <Link href="/profile" className="flex items-center gap-3 hover:text-gray-300">
            <FaUser /> Profile
          </Link>

        </nav>

        {/* Login Section */}
        <div className="mt-10 border-t border-gray-600 pt-6 flex flex-col gap-4">

          <Link
            href="/login"
            className="bg-white text-black text-center p-2 rounded hover:bg-gray-200"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-red-500 text-white text-center p-2 rounded hover:bg-red-600"
          >
            Sign Up
>>>>>>> 6d5ee3a (Initial commit with Practical_1 and UNIT_2)
          </Link>

        </div>

<<<<<<< HEAD
      </div>

      {/* Content */}

      <div className="flex-1 bg-gray-100 p-10">
        {children}
      </div>

    </div>
  )
=======
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        {children}
      </main>

    </div>
  );
>>>>>>> 6d5ee3a (Initial commit with Practical_1 and UNIT_2)
}