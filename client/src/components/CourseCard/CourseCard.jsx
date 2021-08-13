import "./CourseCard.css";
const CourseCard = ({ course }) => {
  const { name, taught_by, description } = course;
  return (
    <article className="course">
      <h1>{name}</h1>
      <h3>{taught_by}</h3>
      <p>{description}</p>
    </article>
  );
};

export default CourseCard;
