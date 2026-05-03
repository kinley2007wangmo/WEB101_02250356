import API from "../lib/api-config";

export const getVideos = async () => {
  const res = await API.get("/videos");
  return res.data;
};

export const likeVideo = async (id) => {
  const res = await API.post(`/videos/${id}/like`);
  return res.data;
};