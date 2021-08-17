import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourse } from "../../services/courses";
const CourseDetail = ({ userData }) => {
  const params = useParams();
  const [course, setCourse] = useState({});
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourse(params.id);
      setCourse(data);
    };
    fetchCourses();
  }, [params.id]);

  return (
    <main>
      <h2>{course?.name}</h2>
      <h4>{course?.category}</h4>
      <p>{course?.description}</p>
      <h4>Taught by {course?.teacher?.username}</h4>
      {!userData?.is_teacher && course?.student_id === null ? (
        <button>Register</button>
      ) : (
        <></>
      )}
    </main>
  );
};

export default CourseDetail;
