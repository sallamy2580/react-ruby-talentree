import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getCourses } from "../../services/courses";

const Browse = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setCourses(data);
    };
    fetchCourses();
  }, []);
  return (
    <Layout>
      <h1>Browse</h1>
      {courses?.map((course) => (
        <h3>{course.name}</h3>
      ))}
    </Layout>
  );
};

export default Browse;
