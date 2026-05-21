"use client";

import {
  useState,
  useRef,
  useEffect,
} from "react";

import Link from "next/link";

import {
  FaHeart,
  FaComment,
  FaShare,
  FaMusic,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

import { useAuth } from "../../contexts/authContext";

import {
  likeVideo,
  unlikeVideo,
} from "../../services/videoService";

import toast from "react-hot-toast";

const VideoCard = ({ video }) => {

  const { isAuthenticated } =
    useAuth();

  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [isMuted, setIsMuted] =
    useState(true);

  const [isLiked, setIsLiked] =
    useState(false);

  const [likes, setLikes] = useState(
    video.likeCount || 0
  );

  const [comments, setComments] =
    useState([]);

  const [commentInput, setCommentInput] =
    useState("");

  const [shares, setShares] = useState(
    0
  );

  // Full Video URL
  const getVideoUrl = (url) => {

    if (!url) return "";

    if (
      url.startsWith("http")
    ) {
      return url;
    }

    return `http://localhost:8000${url}`;
  };

  // Auto Play
  useEffect(() => {

    if (!videoRef.current) return;

    const observer =
      new IntersectionObserver(

        ([entry]) => {

          if (entry.isIntersecting) {

            videoRef.current
              .play()
              .then(() =>
                setIsPlaying(true)
              )
              .catch(() => {});

          } else {

            videoRef.current.pause();

            setIsPlaying(false);
          }
        },

        {
          threshold: 0.7,
        }
      );

    observer.observe(videoRef.current);

    return () => observer.disconnect();

  }, []);

  // Play Pause
  const togglePlay = () => {

    if (!videoRef.current) return;

    if (isPlaying) {

      videoRef.current.pause();

      setIsPlaying(false);

    } else {

      videoRef.current.play();

      setIsPlaying(true);
    }
  };

  // Mute
  const toggleMute = () => {

    if (!videoRef.current) return;

    videoRef.current.muted =
      !videoRef.current.muted;

    setIsMuted(videoRef.current.muted);
  };

  // Like
  const handleLike = async () => {

    if (!isAuthenticated) {

      toast.error(
        "Please login first"
      );

      return;
    }

    try {

      if (isLiked) {

        await unlikeVideo(video.id);

        setLikes((prev) => prev - 1);

        setIsLiked(false);

      } else {

        await likeVideo(video.id);

        setLikes((prev) => prev + 1);

        setIsLiked(true);
      }

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to update like"
      );
    }
  };

  // Comment
  const handleComment = () => {

    if (
      commentInput.trim() === ""
    )
      return;

    setComments([
      ...comments,
      commentInput,
    ]);

    setCommentInput("");
  };

  // Share
  const handleShare = () => {

    setShares((prev) => prev + 1);

    toast.success("Video shared");
  };

  return (

    <div className="mb-10 flex border-b border-gray-700 pb-10">

      {/* Avatar */}
      <div className="mr-4">

        <Link
          href={`/profile/${video.user?.id}`}
        >

          <img
            src={
              video.user?.avatar ||
              "https://via.placeholder.com/100"
            }
            alt="avatar"
            className="h-12 w-12 rounded-full object-cover"
          />

        </Link>
      </div>

      {/* Content */}
      <div className="flex-1">

        {/* User Info */}
        <div className="mb-3">

          <Link
            href={`/profile/${video.user?.id}`}
            className="font-bold hover:underline"
          >
            @{video.user?.username}
          </Link>

          <p>{video.caption}</p>

          {video.sound && (

            <p className="mt-1 flex items-center text-sm text-gray-400">

              <FaMusic className="mr-2" />

              {video.sound}

            </p>
          )}

        </div>

        {/* Video */}
        <div className="flex">

          <div className="relative mr-5 h-[600px] w-[340px] overflow-hidden rounded-xl bg-black">

            <video
              ref={videoRef}
              src={getVideoUrl(video.videoUrl)}
              className="h-full w-full object-cover"
              loop
              muted={isMuted}
              playsInline
              onClick={togglePlay}
            />

            {/* Play Button */}
            {!isPlaying && (

              <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-white">

                ▶️

              </button>
            )}

            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 rounded-full bg-black/60 p-3 text-white"
            >

              {isMuted ? (
                <FaVolumeMute />
              ) : (
                <FaVolumeUp />
              )}

            </button>

          </div>

          {/* Actions */}
          <div className="flex flex-col items-center justify-end gap-5">

            {/* Like */}
            <button
              onClick={handleLike}
              className={`flex flex-col items-center ${
                isLiked
                  ? "text-pink-500"
                  : "text-white"
              }`}
            >

              <div className="rounded-full bg-gray-800 p-4">

                <FaHeart size={22} />

              </div>

              <span>{likes}</span>

            </button>

            {/* Comment */}
            <div className="flex flex-col items-center">

              <div className="rounded-full bg-gray-800 p-4">

                <FaComment size={22} />

              </div>

              <span>
                {comments.length}
              </span>

              <input
                type="text"
                placeholder="Comment..."
                value={commentInput}
                onChange={(e) =>
                  setCommentInput(
                    e.target.value
                  )
                }
                className="mt-2 rounded-md border border-gray-600 bg-black p-2 text-sm text-white"
              />

              <button
                onClick={handleComment}
                className="mt-2 rounded-md bg-pink-500 px-3 py-1 text-sm"
              >

                Send

              </button>

            </div>

            {/* Share */}
            <button
              onClick={handleShare}
              className="flex flex-col items-center"
            >

              <div className="rounded-full bg-gray-800 p-4">

                <FaShare size={22} />

              </div>

              <span>{shares}</span>

            </button>

          </div>

        </div>

        {/* Comment List */}
        {comments.length > 0 && (

          <div className="mt-5 rounded-lg bg-gray-900 p-4">

            <h3 className="mb-2 font-semibold">

              Comments

            </h3>

            {comments.map(
              (comment, index) => (

                <p
                  key={index}
                  className="mb-1 text-sm"
                >
                  💬 {comment}
                </p>
              )
            )}

          </div>
        )}

      </div>

    </div>
  );
};

export default VideoCard;