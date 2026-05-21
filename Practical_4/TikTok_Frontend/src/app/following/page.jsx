'use client';

import { useEffect } from 'react';
import VideoFeed from '../../components/ui/VideoFeed';
import { useAuth } from '../../contexts/authContext';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function FollowingPage() {

  return (

    <div style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
    }}>

      <h1>Following Feed</h1>

      <ul>

        <li>@sonam</li>
        <li>@karma</li>

      </ul>

    </div>
  );
}