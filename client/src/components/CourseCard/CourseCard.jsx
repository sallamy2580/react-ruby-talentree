import "./CourseCard.css";
const CourseCard = ({ course }) => {
  const { name, teacher, description } = course;
  return (
    <article className="course">
      <h2>{name}</h2>
      <h3>{teacher.username}</h3>
      <p>{description}</p>
    </article>
  );
};

export default CourseCard;
