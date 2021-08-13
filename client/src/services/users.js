import api from "./apiConfig";

export const getUser = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

export const register = async (user) => {
  const res = await api.post(`/users`, { user });
  const { token } = res.data;
  if (token) {
    localStorage.setItem("authToken", token);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    return res.data.user;
  }
};
