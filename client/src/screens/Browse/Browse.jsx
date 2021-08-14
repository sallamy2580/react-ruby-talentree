import { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import { getCourses } from "../../services/courses";
import "./Browse.css";

const Browse = (props) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setCourses(data);
    };
    fetchCourses();
  }, []);
  return (
    <main>
      <section className="courses">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
};

export default Browse;
