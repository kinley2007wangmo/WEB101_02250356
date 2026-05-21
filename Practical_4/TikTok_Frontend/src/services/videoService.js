export const getVideos = async () => {
  return {
    videos: [
      {
        id: 1,
        username: "kinley",
        caption: "My first TikTok clone ",
        videoUrl: "/videos/sample.mp4",
        avatar: "https://i.pravatar.cc/150?img=1",
        likeCount: 120,
        commentCount: 10,
      },

      {
        id: 2,
        username: "sonam",
        caption: "Learning Next.js ",
        videoUrl: "/videos/sample2.mp4",
        avatar: "https://i.pravatar.cc/150?img=2",
        likeCount: 80,
        commentCount: 5,
      },
    ],

    pagination: {
      nextCursor: null,
    },
  };
};

export const getFollowingVideos = async () => {
  return {
    videos: [],
    pagination: {
      nextCursor: null,
    },
  };
};

export const likeVideo = async () => {
  return true;
};

export const unlikeVideo = async () => {
  return true;
};