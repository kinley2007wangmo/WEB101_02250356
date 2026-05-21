"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import VideoCard from "./VideoCard";
import {
  getVideos,
  getFollowingVideos,
} from "../../services/videoService";
import toast from "react-hot-toast";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useAuth } from "../../contexts/authContext";

const VideoFeed = ({ feedType = "forYou" }) => {

  const { isAuthenticated } = useAuth();

  const [loadMoreRef, isVisible] =
    useIntersectionObserver();

  // Select API function
  const fetchVideos =
    feedType === "following"
      ? getFollowingVideos
      : getVideos;

  // Infinite Query
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({

    queryKey: ["videos", feedType],

    queryFn: ({ pageParam = null }) =>
      fetchVideos({
        cursor: pageParam,
      }),

    initialPageParam: null,

    getNextPageParam: (lastPage) =>
      lastPage?.pagination?.nextCursor || null,

    enabled:
      feedType !== "following" ||
      isAuthenticated,
  });

  // Infinite scroll
  useEffect(() => {

    if (
      isVisible &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }

  }, [
    isVisible,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  ]);

  // Error handling
  useEffect(() => {

    if (error) {
      toast.error(
        "Failed to load videos"
      );

      console.error(error);
    }

  }, [error]);

  // Loading state
  if (status === "pending") {

    return (
      <div className="flex justify-center py-10">

        <div className="h-10 w-10 animate-spin rounded-full border-4 border-pink-500 border-t-transparent"></div>

      </div>
    );
  }

  // No videos
  const videos =
    data?.pages?.flatMap(
      (page) => page.videos
    ) || [];

  if (videos.length === 0) {

    return (
      <div className="py-10 text-center text-gray-400">

        No videos available.

      </div>
    );
  }

  return (

    <div className="space-y-10">

      {/* Video Cards */}
      {videos.map((video, index) => (

        <VideoCard
          key={`${video.id}-${index}`}
          video={video}
        />

      ))}

      {/* Loading More */}
      {isFetchingNextPage && (

        <div className="flex justify-center py-5">

          <div className="h-8 w-8 animate-spin rounded-full border-4 border-pink-500 border-t-transparent"></div>

        </div>
      )}

      {/* Infinite Scroll Trigger */}
      {hasNextPage && (
        <div
          ref={loadMoreRef}
          className="h-20"
        ></div>
      )}

      {/* End Message */}
      {!hasNextPage && (

        <div className="py-5 text-center text-gray-500">

          You've reached the end.

        </div>
      )}

    </div>
  );
};

export default VideoFeed;