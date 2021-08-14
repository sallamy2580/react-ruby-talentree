import api from "./apiConfig";

export const getPosts = async () => {
  const res = await api.get("/posts");
  return res.data;
};

export const getPost = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res.data;
};

export const createPost = async (post) => {
  const res = await api.post(`/posts`, { post });
  return res.data;
};
