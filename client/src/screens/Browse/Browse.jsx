import { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import Layout from "../../components/Layout/Layout";
import { getCourses } from "../../services/courses";
import "./Browse.css";

const Browse = (props) => {
  const { userData } = props;
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setCourses(data);
    };
    fetchCourses();
  }, []);
  return (
    <Layout userData={userData}>
      <section className="courses">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </Layout>
  );
};

export default Browse;
