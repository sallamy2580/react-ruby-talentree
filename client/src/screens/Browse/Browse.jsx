import { useEffect, useState } from "react";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import CourseCard from "../../components/CourseCard/CourseCard";
import Search from "../../components/Search/Search";
import { getCourses } from "../../services/courses";
import { getTeachers } from "../../services/users";
import "./Browse.css";

const Browse = (props) => {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [displayArray, setDisplayArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const courseData = await getCourses();
      const teacherData = await getTeachers();
      setCourses(courseData);
      setTeachers(teacherData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setDisplayArray(courses.concat(teachers));
  }, [courses, teachers]);
  return (
    <main>
      <Search
        setDisplayArray={setDisplayArray}
        courses={courses}
        teachers={teachers}
      />
      <section className="courses">
        {displayArray?.map((card) =>
          courses.includes(card) ? (
            <CourseCard key={card.id} course={card} />
          ) : (
            <TeacherCard key={card.id} teacher={card} />
          )
        )}
      </section>
    </main>
  );
};

export default Browse;
