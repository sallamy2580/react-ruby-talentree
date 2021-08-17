import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourse } from "../../services/courses";
import "./CourseDetail.css";

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
    <main id="course-detail">
      <article className="course-card">
        <div className="course-card-header">
          <h2>{course?.name}</h2>
          <h4>{course?.category}</h4>
        </div>
        <p>{course?.description}</p>
        <div className="course-card-footer">
          <img
            src={course?.teacher?.img_url}
            alt={`${course?.teacher?.username}`}
          />
          <div className="course-card-footer-text">
            <h5>Taught by</h5>
            <h3>{course?.teacher?.username}</h3>
          </div>
        </div>
        <div className="buttons">
          {!userData?.is_teacher && course?.student_id === null ? (
            <button>Register</button>
          ) : course.teacher_id === userData?.id ? (
            <>
              <button>Edit</button>
              <button>Delete</button>
            </>
          ) : (
            <></>
          )}
        </div>
      </article>
    </main>
  );
};

export default CourseDetail;
