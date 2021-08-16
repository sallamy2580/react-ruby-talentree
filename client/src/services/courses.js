import api from "./apiConfig";

export const getCourses = async () => {
  const res = await api.get("/courses");
  return res.data;
};

export const getCourse = async (id) => {
  const res = await api.get(`/courses/${id}`);
  return res.data;
};

export const createCourse = async (course) => {
  const res = await api.post(`/courses`, { course });
  return res.data;
};
