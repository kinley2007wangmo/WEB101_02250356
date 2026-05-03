import API from "../lib/api-config";

export const getUsers = async () => {
  const res = await API.get("/users");
  return res.data;
};

export const followUser = async (id) => {
  const res = await API.post(`/users/${id}/follow`);
  return res.data;
};
