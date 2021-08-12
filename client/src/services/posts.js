import api from "./apiConfig";

export const getPosts = () => {
  const res = api.get("/posts");
  return res.data;
};

export const getPost = (id) => {
  const res = api.get(`/posts/${id}`);
  return res.data;
};
