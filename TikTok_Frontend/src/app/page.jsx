"use client";
import { useEffect, useState } from "react";
import { getVideos } from "../services/videoService";

export default function Home() {
  return (
    <div>
      <h1>Video Feed</h1>

      <video width="300" controls autoPlay loop>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
    </div>
  );
}