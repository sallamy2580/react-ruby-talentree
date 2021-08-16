import "./Search.css";
const Search = ({ setDisplayArray, courses, teachers }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    if (value === "all") {
      setDisplayArray(courses.concat(teachers));
    } else if (value === "teachers") {
      setDisplayArray(teachers);
    } else {
      setDisplayArray(courses);
    }
  };

  return (
    <div className="browse-search">
      <h2>Search</h2>
      <select name="search_type" id="search-type" onChange={handleChange}>
        <option value="all">All</option>
        <option value="teachers">Teachers</option>
        <option value="courses">Courses</option>
      </select>
      <input type="text" />
    </div>
  );
};

export default Search;
