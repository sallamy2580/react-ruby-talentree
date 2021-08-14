import { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
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
    <div userData={userData}>
      <section className="courses">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </div>
  );
};

export default Browse;
