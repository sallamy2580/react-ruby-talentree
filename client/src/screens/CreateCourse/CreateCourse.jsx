import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCourses } from "../../services/courses";
import { createPost } from "../../services/posts";
import "./CreateCourse.css";

const CreateCourse = ({ userData }) => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();

  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [course, setCourse] = useState({
    name: "",
    description: "",
    category: "",
    start_date: today.toJSON(),
    end_date: tomorrow.toJSON(),
    teacher_id: userData.id,
  });

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: name === "course_id" ? parseInt(value) : value,
    });
  };

  const handleClick = () => {
    history.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(course);
    setTimeout(() => {
      history.push("/");
    }, 500);
  };
  return (
    <main id="create-course">
      <form className="create-course-form" onSubmit={handleSubmit}>
        <h2>NEW COURSE</h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={course.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          value={course.category}
          onChange={handleChange}
        />
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          value={course.description}
          onChange={handleChange}
        />
        <label htmlFor="start-date">Start Date</label>
        <input
          type="datetime-local"
          name="start_date"
          id="start-date"
          value={course.start_date}
          onChange={handleChange}
        />
        <label htmlFor="end-date">End Date</label>
        <input
          type="datetime-local"
          name="end_date"
          id="end-date"
          value={course.media_url}
          onChange={handleChange}
        />

        <div className="buttons">
          <button onClick={handleClick}>Cancel</button>
          <button type="submit">Create</button>
        </div>
      </form>
    </main>
  );
};

export default CreateCourse;
